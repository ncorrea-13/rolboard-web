import { Sigil } from "../components/Ornaments";
import { useShot } from "../hooks/useShot";
import { Rich, T, useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";

const PHONES: { name: string; alt: Key; cls: string }[] = [
  { name: "android-campaigns", alt: "shot.android.campaigns", cls: "phone--l" },
  { name: "android-dashboard", alt: "shot.android.dashboard", cls: "phone--c" },
  { name: "android-help", alt: "shot.android.help", cls: "phone--r" },
];

export function Android() {
  const shot = useShot();
  const { t } = useLang();
  return (
    <section className="section android aura aura--right aura--c2" id="android">
      <Sigil
        variant="astrolabe"
        className="aura__sigil aura__sigil--right sigil--spin"
      />
      <div className="android__text" data-reveal="left">
        <p className="eyebrow">
          <T k="s4.eyebrow" />
        </p>
        <h2>
          <T k="s4.title" />
        </h2>
        <Rich as="p" k="s4.text" />
        <a className="btn btn--ghost" href="/download#downloads">
          <T k="dl.android.btn" />
        </a>
      </div>
      <figure className="phones" data-reveal>
        {PHONES.map((p) => (
          <img
            key={p.name}
            className={`phone ${p.cls}`}
            src={shot(p.name)}
            alt={t(p.alt)}
            width="780"
            height="1688"
            loading="lazy"
          />
        ))}
      </figure>
    </section>
  );
}
