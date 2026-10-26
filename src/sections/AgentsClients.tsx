import { Rich, T } from "../i18n/lang";

export function AgentsClients() {
  return (
    <section className="section" id="clients">
      <div className="section__head" data-reveal>
        <p className="eyebrow">
          <T k="a.clients.eyebrow" />
        </p>
        <h2>
          <T k="a.clients.title" />
        </h2>
      </div>
      <Rich as="p" k="a.clients.text" className="section__sub" />
    </section>
  );
}
