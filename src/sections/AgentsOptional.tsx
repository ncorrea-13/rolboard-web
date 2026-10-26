import { ToggleLeft } from "lucide-react";
import { T } from "../i18n/lang";

const POINTS = ["a.opt.i1", "a.opt.i2", "a.opt.i3"] as const;

export function AgentsOptional() {
  return (
    <section className="section" aria-labelledby="agents-optional-title">
      <div className="agents-optional" data-reveal>
        <ToggleLeft size={22} aria-hidden="true" />
        <div className="agents-optional__body">
          <h2 id="agents-optional-title">
            <T k="a.opt.title" />
          </h2>
          <p>
            <T k="a.opt.text" />
          </p>
          <ul className="agents-optional__points">
            {POINTS.map((k) => (
              <li key={k}>
                <T k={k} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
