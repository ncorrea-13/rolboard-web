import { Sigil } from "../components/Ornaments";
import { Rich, T } from "../i18n/lang";

export function GuideHero() {
  return (
    <section className="section guide-hero aura aura--right aura--c3">
      <Sigil className="guide-hero__sigil" />
      <div className="guide-hero__copy">
        <p className="eyebrow">Obsidian</p>
        <h1>
          <T k="g.title" />
        </h1>
        <Rich as="p" k="g.lead" className="section__sub" />
        <p className="guide-hero__cta">
          <a className="btn btn--primary" href="/download">
            <T k="g.cta.download" />
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/ncorrea-13/rolboard/tree/main/vault-template"
            rel="noopener"
          >
            <T k="g.cta.template" />
          </a>
        </p>
      </div>
    </section>
  );
}
