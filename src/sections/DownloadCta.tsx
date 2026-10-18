import type { useDownloads } from "../hooks/useDownloads";
import { Sigil } from "../components/Ornaments";
import { T } from "../i18n/lang";

type Downloads = ReturnType<typeof useDownloads>;

const OS_LABEL = {
  windows: "dl.win.btn",
  linux: "dl.linux.btn",
  android: "dl.android.btn",
} as const;

export function DownloadCta({ dl }: { dl: Downloads }) {
  return (
    <section className="section cta aura aura--center">
      <Sigil className="aura__sigil aura__sigil--center sigil--spin" />
      <div className="cta__body" data-reveal="scale">
        <h2>
          <T k="dl.title" />
        </h2>
        <p className="section__sub">
          <T k="dl.sub" />
        </p>
        <p className="cta__actions">
          <a
            className="btn btn--primary"
            href={dl.os ? dl.urls[dl.os] : "/download"}
          >
            <T k={dl.os ? OS_LABEL[dl.os] : "hero.cta"} />
          </a>
          <a className="btn btn--ghost" href="/download">
            <T k="cta.all" />
          </a>
        </p>
        {dl.tag && (
          <p className="cta__version">
            <T k="dl.version" />: <b>{dl.tag}</b>
          </p>
        )}
      </div>
    </section>
  );
}
