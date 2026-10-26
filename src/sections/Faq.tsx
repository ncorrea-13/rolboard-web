import { useState } from "react";
import { Sigil } from "../components/Ornaments";
import { T } from "../i18n/lang";
import { QaDetails, type Qa } from "./QaDetails";

// Degrees the wheel moves per question: a later question turns it clockwise, an earlier one back.
const TURN = 40;

const QA: Qa[] = [
  ["faq.freeq", "faq.freea"],
  ["faq.systemq", "faq.systema"],
  ["faq.playersq", "faq.playersa"],
  ["faq.q2", "faq.a2"],
  ["faq.q4", "faq.a4"],
  ["faq.agentsq", "faq.agentsa"],
];

export function Faq() {
  const [opens, setOpens] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  // Last opened question: the wheel keeps its angle when everything is closed.
  const [last, setLast] = useState<number | null>(null);

  return (
    <section className="section faq aura aura--right aura--c2" id="faq">
      <div className="faq__head" data-reveal>
        <h1>
          <T k="faq.title" />
        </h1>
        <div className="faq__orb" data-open={openIdx !== null || undefined}>
          {opens > 0 && (
            <span key={opens} className="faq__ring" aria-hidden="true" />
          )}
          <div
            className="faq__turn"
            style={last !== null ? { rotate: `${last * TURN}deg` } : undefined}
          >
            <Sigil className="faq__sigil" />
          </div>
        </div>
      </div>
      <QaDetails
        items={QA}
        onOpen={(i) => {
          setOpenIdx(i);
          setLast(i);
          setOpens((n) => n + 1);
        }}
        onClose={(i) => setOpenIdx((cur) => (cur === i ? null : cur))}
      />
    </section>
  );
}
