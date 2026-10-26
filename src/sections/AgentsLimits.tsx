import { Eye, KeyRound, PenLine, type LucideIcon } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

// The first one leads: what the assistant reads is the decision that matters.
const ITEMS: { Icon: LucideIcon; title: Key; text: Key }[] = [
  { Icon: Eye, title: "a.d1.title", text: "a.d1.text" },
  { Icon: PenLine, title: "a.d2.title", text: "a.d2.text" },
  { Icon: KeyRound, title: "a.d3.title", text: "a.d3.text" },
];

export function AgentsLimits() {
  return (
    <section className="section" id="limits">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.limits.eyebrow" />
        </p>
        <h2>
          <T k="a.limits.title" />
        </h2>
      </div>
      <ul className="agents-limits">
        {ITEMS.map(({ Icon, title, text }, i) => (
          <li
            key={title}
            className="agents-limits__item"
            data-lead={i === 0 || undefined}
            data-reveal
          >
            <Icon size={i === 0 ? 30 : 22} aria-hidden="true" />
            <h3>
              <T k={title} />
            </h3>
            <Rich as="p" k={text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
