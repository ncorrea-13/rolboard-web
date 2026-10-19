import { Frame } from "../components/Ornaments";
import { Rich, T, useLang } from "../i18n/lang";

/** The sample note is vault content, so it is identical in both languages. */
export function GuideExample() {
  const { t } = useLang();
  return (
    <section className="section guide-example" id="example">
      <div className="guide-example__text" data-reveal>
        <p className="eyebrow">
          <T k="g.ex.eyebrow" />
        </p>
        <h2>
          <T k="g.ex.title" />
        </h2>
        <Rich as="p" k="g.ex.text" />
      </div>
      <Frame className="note">
        <pre aria-label={t("g.ex.label")} data-reveal>
          <span className="note__dim">---</span>
          {"\n"}
          <b>tipo:</b> npc{"\n"}
          <b>status:</b> vivo{"\n"}
          <b>origen:</b> Humano{"\n"}
          <b>rol:</b> Comerciante{"\n"}
          <b>subtipo:</b> Mercader viajero{"\n"}
          <b>current_location:</b> &quot;[[Ciudad de Ejemplo]]&quot;{"\n"}
          <b>faccion:</b>
          {"\n"}
          {"  - "}&quot;[[Grupo de Ejemplo]]&quot;{"\n"}
          <b>vinculado_a:</b>
          {"\n"}
          {"  - "}&quot;[[Personaje de Ejemplo]]&quot;{"\n"}
          <span className="note__dim">---</span>
          {"\n\n"}# Ejemplo NPC{"\n\n"}Vende mapas viejos.{"\n"}Conoce a{" "}
          <b>[[Personaje de Ejemplo]]</b>.
        </pre>
      </Frame>
    </section>
  );
}
