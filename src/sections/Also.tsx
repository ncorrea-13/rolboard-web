import { Eye, Gem, Home, Image, type LucideIcon } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const ITEMS: { Icon: LucideIcon; title: Key; text: Key }[] = [
  { Icon: Gem, title: "f5.title", text: "f5.text" },
  { Icon: Eye, title: "f6.title", text: "f6.text" },
  { Icon: Image, title: "f8.title", text: "f8.text" },
  { Icon: Home, title: "f9.title", text: "f9.text" },
];

export function Also() {
  return (
    <section className="section also">
      <h2 className="also__title" data-reveal>
        <T k="also.title" />
      </h2>
      <ul className="also__list">
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
