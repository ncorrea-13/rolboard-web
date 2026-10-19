import { Rich, T } from "../i18n/lang";
import { Sigil } from "./Ornaments";
import type { Key } from "../i18n/es";

export function PageHead({
  eyebrow,
  title,
  lead,
  aura = false,
}: {
  eyebrow?: Key;
  title: Key;
  lead?: Key;
  aura?: boolean;
}) {
  return (
    <section
      className={`section page-head${aura ? " aura aura--right aura--c2" : ""}`}
    >
      {aura && (
        <Sigil
          variant="astrolabe"
          className="aura__sigil aura__sigil--right sigil--spin"
        />
      )}
      <div className="section__head" data-reveal>
        {eyebrow && (
          <p className="eyebrow">
            <T k={eyebrow} />
          </p>
        )}
        <h1>
          <T k={title} />
        </h1>
        {lead && <Rich as="p" k={lead} className="section__sub" />}
      </div>
    </section>
  );
}
