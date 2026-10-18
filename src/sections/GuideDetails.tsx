import {
  ArrowUpRight,
  Download,
  Link2,
  Lock,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const ITEMS: { Icon: LucideIcon; title: Key; text: Key }[] = [
  { Icon: Link2, title: "g.d1.title", text: "g.d1.text" },
  { Icon: ShieldCheck, title: "g.d2.title", text: "g.d2.text" },
  { Icon: Download, title: "g.d3.title", text: "g.d3.text" },
  { Icon: ArrowUpRight, title: "g.d4.title", text: "g.d4.text" },
  { Icon: RefreshCw, title: "g.d5.title", text: "g.d5.text" },
  { Icon: Lock, title: "g.d6.title", text: "g.d6.text" },
];

export function GuideDetails() {
  return (
    <section className="section also" id="details">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="g.det.eyebrow" />
        </p>
        <h2>
          <T k="g.det.title" />
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
