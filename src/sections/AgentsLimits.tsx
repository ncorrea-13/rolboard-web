import { Eye, KeyRound, PenLine, type LucideIcon } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const ITEMS: { Icon: LucideIcon; title: Key; text: Key }[] = [
  { Icon: Eye, title: "a.d1.title", text: "a.d1.text" },
  { Icon: PenLine, title: "a.d2.title", text: "a.d2.text" },
  { Icon: KeyRound, title: "a.d3.title", text: "a.d3.text" },
];

export function AgentsLimits() {
  return (
    <section className="section also" id="limits">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.limits.eyebrow" />
        </p>
        <h2>
          <T k="a.limits.title" />
        </h2>
      </div>
      <ul className="also__list also__list--three">
        {ITEMS.map(({ Icon, title, text }) => (
          <li key={title} className="also__item" data-reveal>
            <Icon size={22} aria-hidden="true" />
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
