import { Sigil } from "../components/Ornaments";
import { Rich, T } from "../i18n/lang";

export function AgentsHero() {
  return (
    <section className="section guide-hero aura aura--right aura--c3">
      <Sigil className="guide-hero__sigil" />
      <div className="guide-hero__copy">
        <p className="eyebrow">MCP</p>
        <h1>
          <T k="a.title" />
        </h1>
        <Rich as="p" k="a.lead" className="section__sub" />
        <p className="guide-hero__cta">
          <a className="btn btn--primary" href="/download">
            <T k="a.cta.download" />
          </a>
          <a className="btn btn--ghost" href="#how-it-works">
            <T k="a.cta.steps" />
          </a>
        </p>
      </div>
    </section>
  );
}
