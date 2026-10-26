import { Monitor, Server, type LucideIcon } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

interface Path {
  Icon: LucideIcon;
  title: Key;
  where: Key;
  steps: Key[];
  note: Key;
}

const PATHS: Path[] = [
  {
    Icon: Monitor,
    title: "a.p1.title",
    where: "a.p1.where",
    steps: ["a.p1.s1", "a.p1.s2", "a.p1.s3"],
    note: "a.p1.note",
  },
  {
    Icon: Server,
    title: "a.p2.title",
    where: "a.p2.where",
    steps: ["a.p2.s1", "a.p2.s2", "a.p2.s3"],
    note: "a.p2.note",
  },
];

export function AgentsPaths() {
  return (
    <section className="section" id="how-it-works">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.steps.eyebrow" />
        </p>
        <h2>
          <T k="a.paths.title" />
        </h2>
      </div>
      <div className="agents-paths">
        {PATHS.map(({ Icon, title, where, steps, note }) => (
          <article key={title} className="agents-path" data-reveal>
            <header className="agents-path__head">
              <Icon size={24} aria-hidden="true" />
              <h3>
                <T k={title} />
              </h3>
              <span className="agents-path__where">
                <T k={where} />
              </span>
            </header>
            <ol className="agents-path__steps">
              {steps.map((k) => (
                <li key={k}>
                  <Rich k={k} />
                </li>
              ))}
            </ol>
            <p className="agents-path__note">
              <T k={note} />
            </p>
          </article>
        ))}
      </div>
      <p className="agents-android">
        <T k="a.android" />
      </p>
    </section>
  );
}
