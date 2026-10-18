import { useState } from "react";
import { Minus, Plus, Skull, SkipForward } from "lucide-react";
import { T, useLang } from "../i18n/lang";
import { START, adjustHp, nextTurn, type Fighter } from "./logic";

function Hp({ f }: { f: Fighter }) {
  const pct = Math.round((f.hp / f.max) * 100);
  const tone = pct > 50 ? "ok" : pct > 25 ? "warn" : "bad";
  return (
    <div
      className={`hp hp--${tone}`}
      role="meter"
      aria-label="HP"
      aria-valuemin={0}
      aria-valuemax={f.max}
      aria-valuenow={f.hp}
    >
      <svg viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
        <rect className="hp__fill" width={pct} height="4" />
      </svg>
    </div>
  );
}

export function InitiativeTracker() {
  const { t } = useLang();
  const [order, setOrder] = useState<Fighter[]>(START);
  const [turn, setTurn] = useState({ active: 0, round: 1 });
  // bumps per fighter so each hit remounts its flash overlay and replays the animation
  const [flash, setFlash] = useState<
    Record<string, { n: number; heal: boolean }>
  >({});

  const hit = (id: string, delta: number) => {
    setOrder((o) => o.map((f) => (f.id === id ? adjustHp(f, delta) : f)));
    setFlash((fl) => ({
      ...fl,
      [id]: { n: (fl[id]?.n ?? 0) + 1, heal: delta > 0 },
    }));
  };

  return (
    <section className="tracker" aria-label={t("demo.label")}>
      <header className="tracker__head">
        <div>
          <p className="tracker__kicker">{t("demo.label")}</p>
          <h3 className="tracker__title">{t("demo.title")}</h3>
        </div>
        <p className="tracker__round">
          <T k="demo.round" /> <b key={turn.round}>{turn.round}</b>
        </p>
      </header>

      <ul className="tracker__list">
        {order.map((f, i) => {
          const down = f.hp === 0;
          const isActive = i === turn.active && !down;
          return (
            <li
              key={f.id}
              className={`fighter fighter--${f.side}`}
              data-active={isActive || undefined}
              data-down={down || undefined}
            >
              {flash[f.id] && (
                <span
                  key={flash[f.id].n}
                  className={`fighter__flash${flash[f.id].heal ? " fighter__flash--heal" : ""}`}
                  aria-hidden="true"
                />
              )}
              <span className="fighter__mark" aria-hidden="true" />
              <div className="fighter__id">
                <span className="fighter__name">{f.name}</span>
                <span className="fighter__detail">{f.detail}</span>
              </div>
              <div
                className="fighter__ini"
                aria-label={`${t("demo.ini")} ${f.ini}`}
              >
                {f.ini}
              </div>
              <Hp f={f} />
              <div className="fighter__ctl">
                <button
                  type="button"
                  className="step step--minus"
                  aria-label={`${t("demo.damage")} ${f.name}`}
                  disabled={down}
                  onClick={() => hit(f.id, -1)}
                >
                  <Minus size={14} aria-hidden="true" />
                </button>
                <span className="fighter__hp">
                  {down ? (
                    <span className="fighter__down">
                      <Skull size={13} aria-hidden="true" /> {t("demo.down")}
                    </span>
                  ) : (
                    <>
                      <b key={f.hp}>{f.hp}</b> / {f.max}
                    </>
                  )}
                </span>
                <button
                  type="button"
                  className="step step--plus"
                  aria-label={`${t("demo.heal")} ${f.name}`}
                  disabled={f.hp === f.max}
                  onClick={() => hit(f.id, 1)}
                >
                  <Plus size={14} aria-hidden="true" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <footer className="tracker__foot">
        <p className="tracker__turn" aria-live="polite">
          <T k="demo.turn" /> <b>{order[turn.active].name}</b>
        </p>
        <button
          type="button"
          className="btn btn--primary btn--sm"
          onClick={() => setTurn((s) => nextTurn(order, s.active, s.round))}
        >
          <SkipForward size={14} aria-hidden="true" />
          <T k="demo.next" />
        </button>
      </footer>
    </section>
  );
}
