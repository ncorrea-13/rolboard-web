import { Monitor, Terminal, type LucideIcon } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

interface Client {
  name: string;
  Icon: LucideIcon;
  server: Key;
}

// Proper names are not translated. Terminal icon: a CLI; monitor: a desktop app.
const CLIENTS: Client[] = [
  { name: "Claude Code", Icon: Terminal, server: "a.m.command" },
  { name: "Codex", Icon: Terminal, server: "a.m.command" },
  { name: "OpenCode", Icon: Terminal, server: "a.m.config" },
  { name: "Claude Desktop", Icon: Monitor, server: "a.m.config" },
  { name: "Antigravity", Icon: Monitor, server: "a.m.config" },
];

export function AgentsClients() {
  return (
    <section className="section" id="clients">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.clients.eyebrow" />
        </p>
        <h2>
          <T k="a.clients.title" />
        </h2>
        <Rich as="p" k="a.clients.lead" className="section__sub" />
      </div>
      <ul className="agents-clients">
        {CLIENTS.map(({ name, Icon, server }) => (
          <li key={name} className="agents-clients__item" data-reveal>
            <Icon size={22} aria-hidden="true" />
            <h3>{name}</h3>
            <span className="agents-clients__tag">
              <T k={server} />
            </span>
          </li>
        ))}
        <li className="agents-clients__item agents-clients__item--off">
          <T k="a.clients.android" />
        </li>
      </ul>
    </section>
  );
}
