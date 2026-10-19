import { Folder, FolderOpen } from "lucide-react";
import { Frame, Sigil } from "../components/Ornaments";
import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

// Folder names are what the indexer looks for in the vault, so they stay in Spanish.
const FOLDERS: { name: string; to: Key }[] = [
  { name: "Arcos/", to: "obs.arcs" },
  { name: "NPC/", to: "obs.npcs" },
  { name: "Locaciones/", to: "obs.locations" },
  { name: "Grupos/", to: "obs.factions" },
  { name: "Jugadores/", to: "obs.characters" },
  { name: "Sesiones/", to: "obs.sessions" },
];

export function ObsidianBand() {
  const { t } = useLang();
  return (
    <section
      className="section obsband aura aura--ember aura--c3"
      id="obsidian"
    >
      <Sigil
        variant="runes"
        className="aura__sigil aura__sigil--right sigil--spin sigil--spin-rev"
      />
      <div className="obsband__text" data-reveal>
        <p className="eyebrow">
          <T k="obs.eyebrow" />
        </p>
        <h2>
          <T k="obs.title" />
        </h2>
        <Rich as="p" k="obs.text" />
        <a className="btn btn--ghost" href="/obsidian">
          <T k="obs.more" />
        </a>
      </div>
      <Frame className="obsband__vault">
        <div role="group" aria-label={t("obs.tree")} data-reveal>
          <p className="vault__root">
            <FolderOpen size={16} aria-hidden="true" /> <T k="obs.root" />
          </p>
          <ul className="vault__tree">
            {FOLDERS.map((f) => (
              <li key={f.name}>
                <Folder size={15} aria-hidden="true" />
                <b>{f.name}</b>
                <span>
                  <T k={f.to} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Frame>
    </section>
  );
}
