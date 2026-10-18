import { Folder, FolderOpen } from "lucide-react";
import { Frame } from "../components/Ornaments";
import { useTabs } from "../hooks/useTabs";
import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

interface Row {
  folder: string;
  entity: Key;
  keys: string[];
  text: Key;
}

// Folder and frontmatter names are what the indexer reads from the vault: not translated.
const ROWS: Row[] = [
  {
    folder: "NPC/",
    entity: "g.t.npc",
    text: "g.t.npc.keys",
    keys: [
      "tipo",
      "status",
      "origen",
      "rol",
      "subtipo",
      "current_location",
      "faccion",
      "vinculo_con",
      "vinculado_a",
    ],
  },
  {
    folder: "Locaciones/",
    entity: "g.t.loc",
    text: "g.t.loc.keys",
    keys: ["tipo", "parent"],
  },
  {
    folder: "Grupos/",
    entity: "g.t.grp",
    text: "g.t.grp.keys",
    keys: ["alineacion", "lider"],
  },
  {
    folder: "Jugadores/",
    entity: "g.t.pc",
    text: "g.t.pc.keys",
    keys: ["tipo", "jugador", "raza", "status", "facciones", "personaje"],
  },
  {
    folder: "Arcos/",
    entity: "g.t.arc",
    text: "g.t.arc.keys",
    keys: ["arco", "subarco", "titulo", "status", "mision_principal"],
  },
  {
    folder: "Sesiones/",
    entity: "g.t.ses",
    text: "g.t.ses.keys",
    keys: ["numero", "fecha", "status", "tags", "titulo", "arco"],
  },
  {
    folder: "Lore/",
    entity: "g.t.lore",
    text: "g.t.lore.keys",
    keys: ["tipo", "arco", "locacion"],
  },
];

const slug = (f: string) => f.replace("/", "").toLowerCase();

export function GuideFolders() {
  const { t } = useLang();
  const { sel, setSel, onKeyDown, ref } = useTabs(ROWS.length);

  return (
    <section className="section" id="folders">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="g.folders.eyebrow" />
        </p>
        <h2>
          <T k="g.folders.title" />
        </h2>
      </div>

      <ul className="folder-rules" data-reveal>
        {(
          [
            "g.folders.r1",
            "g.folders.r2",
            "g.folders.r3",
            "g.folders.r4",
          ] as const
        ).map((k) => (
          <li key={k}>
            <Rich as="span" k={k} />
          </li>
        ))}
      </ul>

      <div className="tablet" data-reveal>
        <div
          className="tablet__tree"
          role="tablist"
          aria-label={t("g.folders.label")}
          aria-orientation="vertical"
        >
          {ROWS.map((r, i) => (
            <button
              key={r.folder}
              ref={ref(i)}
              id={`fold-${slug(r.folder)}`}
              type="button"
              role="tab"
              aria-selected={sel === i}
              aria-controls={`fold-panel-${slug(r.folder)}`}
              tabIndex={sel === i ? 0 : -1}
              className="tablet__folder"
              onClick={() => setSel(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {sel === i ? (
                <FolderOpen size={17} aria-hidden="true" />
              ) : (
                <Folder size={17} aria-hidden="true" />
              )}
              <code>{r.folder}</code>
            </button>
          ))}
        </div>

        {ROWS.map((r, i) => (
          <Frame key={r.folder} className="tablet__panel">
            <div
              id={`fold-panel-${slug(r.folder)}`}
              role="tabpanel"
              aria-labelledby={`fold-${slug(r.folder)}`}
              hidden={sel !== i}
            >
              <div className="tablet__body">
                <div>
                  <p className="tablet__label">
                    <T k="g.t.entity" />
                  </p>
                  <h3 className="tablet__entity">
                    <T k={r.entity} />
                  </h3>
                  <Rich as="p" k={r.text} className="tablet__text" />
                </div>
                <div className="tablet__keysbox">
                  <p className="tablet__label">
                    <T k="g.t.keys" />
                  </p>
                  <ul className="tablet__keys">
                    {r.keys.map((k) => (
                      <li key={k}>
                        <code>{k}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Frame>
        ))}
      </div>
    </section>
  );
}
