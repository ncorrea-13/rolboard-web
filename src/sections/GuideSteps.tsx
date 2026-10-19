import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

const STEPS: { title: Key; text: Key }[] = [
  { title: "g.s1.title", text: "g.s1.text" },
  { title: "g.s2.title", text: "g.s2.text" },
  { title: "g.s3.title", text: "g.s3.text" },
];

export function GuideSteps() {
  return (
    <section className="section" id="how-it-works">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="g.steps.eyebrow" />
        </p>
        <h2>
          <T k="g.steps.title" />
        </h2>
      </div>
      <ol className="route">
        {STEPS.map((s, i) => (
          <li key={s.title} className="route__stop" data-reveal>
            <span className="route__pin" aria-hidden="true">
              {i + 1}
            </span>
            <h3>
              <T k={s.title} />
            </h3>
            <Rich as="p" k={s.text} />
          </li>
        ))}
      </ol>
    </section>
  );
}
