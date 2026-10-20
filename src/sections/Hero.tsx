import { useRef } from "react";
import { Crack, Frame, Sigil } from "../components/Ornaments";
import { DiceRoller } from "../demos/DiceRoller";
import { InitiativeTracker } from "../demos/InitiativeTracker";
import type { useDownloads } from "../hooks/useDownloads";
import { T } from "../i18n/lang";

type Downloads = ReturnType<typeof useDownloads>;

const OS_LABEL = {
  windows: "dl.win.btn",
  linux: "dl.linux.btn",
  android: "dl.android.btn",
} as const;

export function Hero({ dl }: { dl: Downloads }) {
  const sky = useRef<HTMLElement>(null);

  // The torch follows the pointer; it only moves on input, never on a timer.
  const torch = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    sky.current?.style.setProperty("--mx", `${e.clientX - r.left}px`);
    sky.current?.style.setProperty("--my", `${e.clientY - r.top}px`);
    sky.current?.style.setProperty(
      "--ry",
      String(((e.clientX - r.left) / r.width) * 2 - 1),
    );
    sky.current?.style.setProperty(
      "--rx",
      String(((e.clientY - r.top) / r.height) * 2 - 1),
    );
  };
  const rest = () => {
    sky.current?.style.setProperty("--ry", "0");
    sky.current?.style.setProperty("--rx", "0");
  };

  return (
    <section
      className="hero"
      ref={sky}
      onPointerMove={torch}
      onPointerLeave={rest}
    >
      <div className="hero__sky" aria-hidden="true" />
      <div className="hero__copy">
        <p className="eyebrow">
          <T k="hero.eyebrow" />
        </p>
        <h1 className="hero__title">
          <span>
            <T k="hero.title1" />
          </span>{" "}
          <em>
            <T k="hero.title2" />
          </em>
        </h1>
        <p className="hero__lead">
          <T k="hero.lead" />
        </p>
        <div className="hero__cta">
          <a
            className="btn btn--primary"
            id="cta-download"
            href={dl.os ? dl.urls[dl.os] : "/download"}
          >
            <T k={dl.os ? OS_LABEL[dl.os] : "hero.cta"} />
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/ncorrea-13/rolboard"
            rel="noopener"
          >
            <T k="hero.code" />
          </a>
        </div>
        <p className="hero__meta">
          <T k="hero.meta" />
        </p>
      </div>

      <div className="hero__table" id="table-demo">
        <Sigil className="hero__sigil" />
        <Frame>
          <InitiativeTracker />
        </Frame>
        <DiceRoller />
      </div>
      <div className="hero__rule">
        <Crack />
      </div>
    </section>
  );
}
