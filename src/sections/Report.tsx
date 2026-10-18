import { Rich, T } from "../i18n/lang";

export function Report() {
  return (
    <section className="section report">
      <div className="report__card" data-reveal>
        <div>
          <h2>
            <T k="report.title" />
          </h2>
          <Rich as="p" k="report.text" />
        </div>
        <div className="report__actions">
          <a
            className="btn btn--primary"
            href="https://github.com/ncorrea-13/rolboard/issues/new/choose"
            rel="noopener"
          >
            <T k="report.new" />
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/ncorrea-13/rolboard/issues"
            rel="noopener"
          >
            <T k="report.list" />
          </a>
        </div>
      </div>
    </section>
  );
}
