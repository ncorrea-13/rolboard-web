import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

const STEPS: { title: Key; text: Key }[] = [
  { title: "a.s1.title", text: "a.s1.text" },
  { title: "a.s2.title", text: "a.s2.text" },
  { title: "a.s3.title", text: "a.s3.text" },
];

// Placeholders, like the app's own snippets: the user knows where the binary lives.
const COMMANDS = `$ /path/to/rolboard-mcp login --url https://rolboard.example.com --campaign 3
$ claude mcp add --scope user rolboard-3 -e ROLBOARD_URL=https://rolboard.example.com -e ROLBOARD_CAMPAIGN=3 -- /path/to/rolboard-mcp`;

export function AgentsSteps() {
  const { t } = useLang();
  return (
    <section className="section" id="how-it-works">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.steps.eyebrow" />
        </p>
        <h2>
          <T k="a.steps.title" />
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
      <div className="agents-term" data-reveal>
        <p className="agents-term__label">
          <T k="a.term.eyebrow" />
        </p>
        <pre className="agents-term__code" aria-label={t("a.term.label")}>
          <code>{COMMANDS}</code>
        </pre>
      </div>
    </section>
  );
}
