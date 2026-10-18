import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

export type Qa = [question: Key, answer: Key];

// How long a closing answer keeps its <details> open so the close animation can play.
const CLOSE_MS = 450;

export function QaDetails({
  items,
  onOpen,
  onClose,
}: {
  items: Qa[];
  onOpen?: (i: number) => void;
  onClose?: (i: number) => void;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (open === i) {
      setOpen(null);
      onClose?.(i);
    } else {
      setOpen(i);
      onOpen?.(i);
    }
  };

  return (
    <div className="faq__list">
      {items.map(([q, a], i) => (
        <QaItem
          key={q}
          q={q}
          a={a}
          open={open === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}

/**
 * Animated <details>. The native element toggles instantly, so the click is intercepted and two states
 * are kept: `rendered` (the open attribute, held until the close animation ends) and `expanded`
 * (drives the CSS transitions, one frame after opening so the row can grow from zero).
 */
function QaItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: Key;
  a: Key;
  open: boolean;
  onToggle: () => void;
}) {
  const [rendered, setRendered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (open) {
      setRendered(true);
      let second = 0;
      const first = requestAnimationFrame(() => {
        second = requestAnimationFrame(() => setExpanded(true));
      });
      return () => {
        cancelAnimationFrame(first);
        cancelAnimationFrame(second);
      };
    }
    setExpanded(false);
    const timer = setTimeout(() => setRendered(false), CLOSE_MS);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <details
      open={rendered}
      data-state={expanded ? "open" : "closed"}
      data-reveal
    >
      <summary
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <span>
          <T k={q} />
        </span>
        <Plus size={18} aria-hidden="true" />
      </summary>
      <div className="faq__answer">
        <div className="faq__answer-inner">
          <Rich as="p" k={a} />
        </div>
      </div>
    </details>
  );
}
