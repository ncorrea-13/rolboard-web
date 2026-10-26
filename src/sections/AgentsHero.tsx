import { Bot } from "lucide-react";
import { Sigil } from "../components/Ornaments";
import { Rich, T, useLang } from "../i18n/lang";

export function AgentsHero() {
  const { t } = useLang();
  return (
    <section className="section guide-hero agents-hero aura aura--right aura--c3">
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
      <figure className="agents-link" role="img" aria-label={t("a.link.label")}>
        <span className="agents-link__node">
          <img
            className="agents-link__logo"
            src="/assets/logo-icon.png"
            alt=""
            width="64"
            height="64"
          />
          <span className="agents-link__name">
            <T k="a.link.rolboard" />
          </span>
        </span>
        <span className="agents-link__wire" aria-hidden="true">
          <span className="agents-link__tag">MCP</span>
        </span>
        <span className="agents-link__node">
          <Bot size={40} aria-hidden="true" />
          <span className="agents-link__name">
            <T k="a.link.assistant" />
          </span>
        </span>
      </figure>
    </section>
  );
}
