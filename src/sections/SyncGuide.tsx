import {
  FolderSync,
  HardDrive,
  Server,
  TriangleAlert,
  Usb,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Frame } from "../components/Ornaments";
import { useTabs } from "../hooks/useTabs";
import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

interface Method {
  id: string;
  Icon: LucideIcon;
  tab: Key;
  when: Key;
  steps: Key;
  watch: Key;
}

const METHODS: Method[] = [
  {
    id: "none",
    Icon: HardDrive,
    tab: "sync.t.none",
    when: "sync.none.when",
    steps: "sync.none.steps",
    watch: "sync.none.watch",
  },
  {
    id: "folder",
    Icon: FolderSync,
    tab: "sync.t.folder",
    when: "sync.folder.when",
    steps: "sync.folder.steps",
    watch: "sync.folder.watch",
  },
  {
    id: "manual",
    Icon: Usb,
    tab: "sync.t.manual",
    when: "sync.manual.when",
    steps: "sync.manual.steps",
    watch: "sync.manual.watch",
  },
  {
    id: "server",
    Icon: Server,
    tab: "sync.t.server",
    when: "sync.server.when",
    steps: "sync.server.steps",
    watch: "sync.server.watch",
  },
];

// File and folder names are what Rolboard writes, so they are not translated.
const FILES: { name: string; desc: Key; dim?: boolean }[] = [
  { name: "rolboard.db", desc: "sync.f.db" },
  { name: "uploads/", desc: "sync.f.uploads" },
  { name: "rolboard.conflict.db", desc: "sync.f.conflict" },
  { name: "config.json", desc: "sync.f.config", dim: true },
];

export function SyncGuide() {
  const { t } = useLang();
  const { sel, setSel, onKeyDown, ref } = useTabs(METHODS.length);

  return (
    <section className="section sync" id="sync">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="sync.eyebrow" />
        </p>
        <h2>
          <T k="sync.title" />
        </h2>
        <p className="section__sub">
          <T k="sync.lead" />
        </p>
      </div>

      <div
        className="sync__tabs"
        role="tablist"
        aria-label={t("sync.label")}
        data-reveal
      >
        {METHODS.map(({ id, Icon, tab }, i) => (
          <button
            key={id}
            ref={ref(i)}
            id={`sync-tab-${id}`}
            type="button"
            role="tab"
            aria-selected={sel === i}
            aria-controls={`sync-panel-${id}`}
            tabIndex={sel === i ? 0 : -1}
            className="codex__tab"
            onClick={() => setSel(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <Icon size={18} aria-hidden="true" />
            <span>
              <T k={tab} />
            </span>
          </button>
        ))}
      </div>

      {METHODS.map((m, i) => (
        <Frame key={m.id} className="sync__frame">
          <div
            id={`sync-panel-${m.id}`}
            role="tabpanel"
            aria-labelledby={`sync-tab-${m.id}`}
            hidden={sel !== i}
            className="sync__page"
          >
            <div className="sync__cols">
              <div className="sync__main">
                <p className="sync__label">
                  <T k="sync.when" />
                </p>
                <Rich as="p" k={m.when} className="sync__when" />
                <div className="sync__steps">
                  <h3>
                    <T k="sync.steps" />
                  </h3>
                  <Rich as="div" k={m.steps} />
                </div>
              </div>
              <div className="sync__watch">
                <h3>
                  <TriangleAlert size={18} aria-hidden="true" />
                  <T k="sync.watch" />
                </h3>
                <Rich as="div" k={m.watch} />
              </div>
            </div>

            {m.id === "server" && (
              <div className="sync__watch sync__multi">
                <h3>
                  <Users size={18} aria-hidden="true" />
                  <T k="sync.multi.title" />
                </h3>
                <Rich as="div" k="sync.multi.body" />
              </div>
            )}

            {m.id === "folder" && (
              <div className="sync__files">
                <h3>
                  <T k="sync.files" />
                </h3>
                <dl>
                  {FILES.map((f) => (
                    <div key={f.name} data-dim={f.dim || undefined}>
                      <dt>
                        <code>{f.name}</code>
                      </dt>
                      <dd>
                        <T k={f.desc} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </Frame>
      ))}
    </section>
  );
}
