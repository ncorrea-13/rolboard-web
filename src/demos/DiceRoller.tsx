import { useRef, useState } from "react";
import { Skull, Sparkles } from "lucide-react";
import { D20 } from "../components/Ornaments";
import { T, useLang } from "../i18n/lang";
import { rollD20 } from "./logic";

/** An ornamental d20. Rolboard itself never rolls: the joke is the copy, the die is real. */
export function DiceRoller() {
  const { t } = useLang();
  const [rolls, setRolls] = useState<{ id: number; v: number }[]>([]);
  const nextId = useRef(0);
  const [spin, setSpin] = useState(0);
  const last = rolls[0]?.v;

  const roll = () => {
    setRolls((r) => [{ id: nextId.current++, v: rollD20() }, ...r].slice(0, 6));
    setSpin((n) => n + 1);
  };

  return (
    <div className="dice">
      <button
        type="button"
        className="dice__btn"
        onClick={roll}
        aria-label={t("dice.roll")}
        data-result={last === 20 ? "crit" : last === 1 ? "fumble" : undefined}
      >
        <D20
          key={spin}
          value={last ? String(last) : "20"}
          className={spin ? "d20--roll" : ""}
        />
        {last === 20 && (
          <span key={`b${spin}`} className="burst" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </span>
        )}
      </button>
      <div className="dice__body">
        <p className="dice__title">
          <T k="dice.title" />
        </p>
        <p className="dice__result" aria-live="polite">
          {last === undefined ? (
            <T k="dice.none" />
          ) : (
            <>
              <T k="dice.result" /> <b>{last}</b>
              {last === 20 && (
                <span className="dice__flag dice__flag--crit">
                  <Sparkles size={13} aria-hidden="true" /> <T k="dice.crit" />
                </span>
              )}
              {last === 1 && (
                <span className="dice__flag dice__flag--fumble">
                  <Skull size={13} aria-hidden="true" /> <T k="dice.fumble" />
                </span>
              )}
            </>
          )}
        </p>
        {rolls.length > 1 && (
          <ol className="dice__history" aria-label={t("dice.history")}>
            {rolls.slice(1).map((r) => (
              <li key={r.id}>{r.v}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
