import type { ReactNode } from "react";

export function Crack() {
  return (
    <div className="crack" aria-hidden="true" data-reveal>
      <span className="crack__line" />
      <svg viewBox="0 0 96 20" width="96" height="20">
        <path
          d="M0 10 L24 5 L44 15 L58 7 L96 10"
          className="crack__vein"
          fill="none"
        />
        <path d="M48 1 L55 10 L48 19 L41 10 Z" className="crack__gem" />
        <path d="M24 7 L27 10 L24 13 L21 10 Z" className="crack__ember" />
        <path d="M72 7 L75 10 L72 13 L69 10 Z" className="crack__ember" />
      </svg>
      <span className="crack__line" />
    </div>
  );
}

export function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`frame ${className}`.trim()}>{children}</div>;
}

// Seven-pointed star ({7/3}), one continuous stroke: a fantasy "elven star", not the two-triangle hexagram.
const HEPTAGRAM = Array.from({ length: 7 }, (_, n) => {
  const angle = ((-90 + (((n * 3) % 7) * 360) / 7) * Math.PI) / 180;
  return `${(200 + 118 * Math.cos(angle)).toFixed(1)},${(200 + 118 * Math.sin(angle)).toFixed(1)}`;
}).join(" ");

const TICKS = Array.from({ length: 72 }, (_, i) => i);
const RUNES = Array.from({ length: 12 }, (_, i) => i);
const SPOKES = Array.from({ length: 8 }, (_, i) => i);
const FINE_TICKS = Array.from({ length: 48 }, (_, i) => i);

const GLYPHS = [
  "M10 2V18M10 6L16 10M10 10L16 14",
  "M5 2V18M5 2L14 7L5 12",
  "M4 18L10 2L16 18M6.5 12H13.5",
  "M5 2L15 10L5 18M10 2V18",
  "M4 4L16 4M10 4V18M4 12L16 12",
  "M5 18V2L15 18V2",
  "M4 2L16 18M16 2L4 18",
  "M10 2L16 10L10 18L4 10Z",
  "M5 2V18M15 2V18M5 10H15",
  "M4 18L10 2L16 18",
  "M5 2L15 2L5 18L15 18",
  "M10 2V18M4 8L10 14L16 8",
];

export type SigilVariant = "circle" | "astrolabe" | "runes";

export function Sigil({
  className = "",
  variant = "circle",
}: {
  className?: string;
  variant?: SigilVariant;
}) {
  return (
    <svg
      className={`sigil ${className}`.trim()}
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      {variant === "circle" && <CircleSigil />}
      {variant === "astrolabe" && <AstrolabeSigil />}
      {variant === "runes" && <RuneSigil />}
    </svg>
  );
}

function CircleSigil() {
  return (
    <>
      <circle
        className="sigil__ring"
        cx="200"
        cy="200"
        r="192"
        pathLength="1"
      />
      <circle
        className="sigil__ring sigil__ring--soft"
        cx="200"
        cy="200"
        r="176"
        pathLength="1"
      />
      {TICKS.map((i) => (
        <line
          key={i}
          className="sigil__tick"
          x1="200"
          y1={i % 6 === 0 ? 12 : 18}
          x2="200"
          y2="24"
          transform={`rotate(${i * 5} 200 200)`}
        />
      ))}
      <circle
        className="sigil__ring"
        cx="200"
        cy="200"
        r="128"
        pathLength="1"
      />
      {RUNES.map((i) => (
        <path
          key={i}
          className="sigil__rune"
          d="M200 58 L206 68 L200 78 L194 68 Z"
          transform={`rotate(${i * 30} 200 200)`}
        />
      ))}
      <polygon className="sigil__star" points={HEPTAGRAM} />
      <circle
        className="sigil__ring sigil__ring--soft"
        cx="200"
        cy="200"
        r="46"
        pathLength="1"
      />
    </>
  );
}

function AstrolabeSigil() {
  return (
    <>
      <circle
        className="sigil__ring"
        cx="200"
        cy="200"
        r="192"
        pathLength="1"
      />
      <circle
        className="sigil__ring sigil__ring--soft"
        cx="200"
        cy="200"
        r="150"
        pathLength="1"
      />
      <circle
        className="sigil__ring"
        cx="200"
        cy="200"
        r="104"
        pathLength="1"
      />
      <circle
        className="sigil__ring sigil__ring--soft"
        cx="200"
        cy="200"
        r="58"
        pathLength="1"
      />
      {FINE_TICKS.map((i) => (
        <line
          key={i}
          className="sigil__tick"
          x1="200"
          y1={i % 4 === 0 ? 14 : 20}
          x2="200"
          y2="26"
          transform={`rotate(${i * 7.5} 200 200)`}
        />
      ))}
      {SPOKES.map((i) => (
        <g key={i} transform={`rotate(${i * 45} 200 200)`}>
          <line className="sigil__star" x1="200" y1="142" x2="200" y2="50" />
          <circle className="sigil__bead" cx="200" cy="50" r="7" />
          <path
            className="sigil__rune"
            d="M200 90 L204 96 L200 102 L196 96 Z"
          />
        </g>
      ))}
      <circle className="sigil__bead" cx="200" cy="200" r="10" />
    </>
  );
}

function RuneSigil() {
  return (
    <>
      <circle
        className="sigil__ring"
        cx="200"
        cy="200"
        r="192"
        pathLength="1"
      />
      <circle
        className="sigil__ring sigil__ring--soft"
        cx="200"
        cy="200"
        r="150"
        pathLength="1"
      />
      {GLYPHS.map((d, i) => (
        <path
          key={i}
          className="sigil__glyph"
          d={d}
          transform={`rotate(${i * 30} 200 200) translate(190 20)`}
        />
      ))}
      <g transform="translate(200 200) scale(1.15)">
        <polygon
          className="sigil__star"
          points="0,-100 87,-50 87,50 0,100 -87,50 -87,-50"
        />
        <polygon className="sigil__star" points="0,-66 57,34 -57,34" />
        <path
          className="sigil__star"
          d="M0 -100V-66M87 -50L0 -66M87 -50L57 34M87 50L57 34M0 100L57 34M0 100L-57 34M-87 50L-57 34M-87 -50L0 -66M-87 -50L-57 34"
        />
      </g>
    </>
  );
}

export function D20({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  return (
    <svg
      className={`d20 ${className}`.trim()}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <polygon
        className="d20__body"
        points="50,3 91,26 91,74 50,97 9,74 9,26"
      />
      <polygon className="d20__face" points="50,22 79,68 21,68" />
      <path
        className="d20__edge"
        d="M50 3V22M91 26L50 22M91 26L79 68M91 74L79 68M50 97L79 68M50 97L21 68M9 74L21 68M9 26L50 22M9 26L21 68"
        fill="none"
      />
      <text className="d20__num" x="50" y="60" textAnchor="middle">
        {value}
      </text>
    </svg>
  );
}
