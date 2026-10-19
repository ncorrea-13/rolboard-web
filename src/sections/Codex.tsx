import {
  BookOpen,
  LayoutDashboard,
  Map as MapIcon,
  Search,
  Swords,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Frame } from "../components/Ornaments";
import { useShot } from "../hooks/useShot";
import { useTabs } from "../hooks/useTabs";
import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

interface Tab {
  id: string;
  Icon: LucideIcon;
  tab: Key;
  eyebrow?: Key;
  title: Key;
  text: Key;
  shot: string;
  alt: Key;
}

const TABS: Tab[] = [
  {
    id: "dash",
    Icon: LayoutDashboard,
    tab: "codex.dash.tab",
    title: "codex.dash.title",
    text: "codex.dash.text",
    shot: "dashboard",
    alt: "shot.dashboard",
  },
  {
    id: "story",
    Icon: BookOpen,
    tab: "f1.title",
    eyebrow: "s3.eyebrow",
    title: "s3.title",
    text: "s3.text",
    shot: "sessions",
    alt: "shot.sessions",
  },
  {
    id: "cast",
    Icon: Users,
    tab: "f2.title",
    eyebrow: "s1.eyebrow",
    title: "s1.title",
    text: "s1.text",
    shot: "npcs",
    alt: "shot.npcs",
  },
  {
    id: "world",
    Icon: MapIcon,
    tab: "f3.title",
    eyebrow: "s5.eyebrow",
    title: "s5.title",
    text: "s5.text",
    shot: "world",
    alt: "shot.world",
  },
  {
    id: "combat",
    Icon: Swords,
    tab: "f4.title",
    eyebrow: "s2.eyebrow",
    title: "s2.title",
    text: "s2.text",
    shot: "encounter",
    alt: "shot.encounter",
  },
  {
    id: "search",
    Icon: Search,
    tab: "f7.title",
    eyebrow: "s6.eyebrow",
    title: "s6.title",
    text: "s6.text",
    shot: "search",
    alt: "shot.search",
  },
];

export function Codex() {
  const { t } = useLang();
  const { sel, setSel, onKeyDown, ref } = useTabs(TABS.length);
  const shot = useShot();

  return (
    <section className="section codex" id="features">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="features.eyebrow" />
        </p>
        <h2>
          <T k="features.title" />
        </h2>
      </div>

      <div className="codex__grid">
        <div
          className="codex__tabs"
          data-reveal="left"
          role="tablist"
          aria-label={t("codex.label")}
          aria-orientation="vertical"
        >
          {TABS.map(({ id, Icon, tab }, i) => (
            <button
              key={id}
              ref={ref(i)}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={sel === i}
              aria-controls={`panel-${id}`}
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

        <div className="codex__pages">
          {TABS.map((t, i) => (
            <div
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              hidden={sel !== i}
              className="codex__page"
            >
              <Frame className="codex__frame">
                <ShotImg tab={t} src={shot(t.shot)} />
              </Frame>
              <div className="codex__text">
                {t.eyebrow && (
                  <p className="eyebrow">
                    <T k={t.eyebrow} />
                  </p>
                )}
                <h3>
                  <T k={t.title} />
                </h3>
                <Rich as="p" k={t.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShotImg({ tab, src }: { tab: Tab; src: string }) {
  const { t } = useLang();
  return (
    <img src={src} alt={t(tab.alt)} width="1440" height="900" loading="lazy" />
  );
}
