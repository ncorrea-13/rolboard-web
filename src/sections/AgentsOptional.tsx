import {
  Laptop,
  Power,
  ToggleLeft,
  Unplug,
  type LucideIcon,
} from "lucide-react";
import { T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const POINTS: { Icon: LucideIcon; text: Key }[] = [
  { Icon: Power, text: "a.opt.i1" },
  { Icon: Laptop, text: "a.opt.i2" },
  { Icon: Unplug, text: "a.opt.i3" },
];

export function AgentsOptional() {
  return (
    <section className="section" aria-labelledby="agents-optional-title">
      <div className="agents-optional" data-reveal>
        <div className="agents-optional__head">
          <span className="agents-optional__badge">
            <ToggleLeft size={24} aria-hidden="true" />
          </span>
          <div>
            <h2 id="agents-optional-title">
              <T k="a.opt.title" />
            </h2>
            <p>
              <T k="a.opt.text" />
            </p>
          </div>
        </div>
        <ul className="agents-optional__points">
          {POINTS.map(({ Icon, text }) => (
            <li key={text}>
              <Icon size={18} aria-hidden="true" />
              <T k={text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
