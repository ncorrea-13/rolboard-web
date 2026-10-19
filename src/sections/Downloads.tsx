import type { useDownloads, Platform } from "../hooks/useDownloads";
import { Frame } from "../components/Ornaments";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

type Dl = ReturnType<typeof useDownloads>;

const ROWS: {
  os: Platform;
  name: string;
  meta: string;
  btn: Key;
  note: Key;
}[] = [
  {
    os: "windows",
    name: "Windows",
    meta: "x64 (amd64) · .exe",
    btn: "dl.win.btn",
    note: "dl.win.note",
  },
  {
    os: "linux",
    name: "Linux",
    meta: "x64 (amd64) · .AppImage",
    btn: "dl.linux.btn",
    note: "dl.linux.note",
  },
  {
    os: "android",
    name: "Android",
    meta: "ARM64 · .apk",
    btn: "dl.android.btn",
    note: "dl.android.note",
  },
];

export function Downloads({ dl }: { dl: Dl }) {
  return (
    <section className="section downloads" id="downloads">
      <div className="dl__list">
        {ROWS.map((r) => {
          const lead = dl.os === r.os;
          const row = (
            <article
              className="dl"
              data-os={r.os}
              data-lead={lead || undefined}
            >
              <div className="dl__id">
                <h3>{r.name}</h3>
                <p className="dl__meta">{r.meta}</p>
                {lead && (
                  <p className="dl__badge">
                    <T k="dl.recommended" />
                  </p>
                )}
              </div>
              <Rich as="p" k={r.note} className="dl__note" />
              <a className="btn btn--primary" href={dl.urls[r.os]}>
                <T k={r.btn} />
              </a>
            </article>
          );
          return lead ? (
            <Frame key={r.os} className="dl__lead">
              {row}
            </Frame>
          ) : (
            <div key={r.os}>{row}</div>
          );
        })}
        <article className="dl">
          <div className="dl__id">
            <h3>
              <T k="dl.server.title" />
            </h3>
            <p className="dl__meta">x64 (amd64) / ARM64 · ghcr.io</p>
          </div>
          <p className="dl__note">
            <T k="dl.server.note" />
          </p>
          <a
            className="btn btn--ghost"
            href="https://github.com/ncorrea-13/rolboard#readme"
            rel="noopener"
          >
            <T k="dl.server.btn" />
          </a>
        </article>
      </div>

      <p className="downloads__all">
        {dl.tag && (
          <span>
            <T k="dl.version" />: <b>{dl.tag}</b> ·{" "}
          </span>
        )}
        <a
          href="https://github.com/ncorrea-13/rolboard/releases"
          rel="noopener"
        >
          <T k="dl.all" />
        </a>
      </p>
    </section>
  );
}
