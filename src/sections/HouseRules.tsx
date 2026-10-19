import { Dices, Map, ScrollText, type LucideIcon } from "lucide-react";
import { T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const NOT: { Icon: LucideIcon; text: Key }[] = [
  { Icon: Map, text: "not.vtt" },
  { Icon: ScrollText, text: "not.rules" },
  { Icon: Dices, text: "not.dice" },
];

export function HouseRules() {
  return (
    <section className="section rules" id="rules">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="not.eyebrow" />
        </p>
        <h2>
          <T k="not.title" />
        </h2>
      </div>
      <ul className="rules__list">
        {NOT.map(({ Icon, text }) => (
          <li key={text} data-reveal>
            <span className="rules__icon" aria-hidden="true">
              <Icon size={26} />
            </span>
            <T k={text} />
          </li>
        ))}
      </ul>
      <p className="rules__is" data-reveal>
        <T k="not.is" />
      </p>
    </section>
  );
}
