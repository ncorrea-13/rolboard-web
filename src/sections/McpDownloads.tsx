import type { McpPlatform, useDownloads } from "../hooks/useDownloads";
import { Rich, T } from "../i18n/lang";
import type { Key } from "../i18n/es";

type Dl = ReturnType<typeof useDownloads>;

const ROWS: {
  os: McpPlatform;
  name: string;
  meta: string;
  btn: Key;
  note: Key;
}[] = [
  {
    os: "linux",
    name: "Linux",
    meta: "x64 (amd64)",
    btn: "dl.mcp.linux.btn",
    note: "dl.mcp.linux.note",
  },
  {
    os: "windows",
    name: "Windows",
    meta: "x64 (amd64) · .exe",
    btn: "dl.mcp.win.btn",
    note: "dl.win.note",
  },
];

export function McpDownloads({ dl }: { dl: Dl }) {
  return (
    <section className="section downloads" id="mcp">
      <div className="section__head" data-reveal>
        <p className="eyebrow">MCP</p>
        <h2>
          <T k="dl.mcp.title" />
        </h2>
        <Rich as="p" k="dl.mcp.lead" className="section__sub" />
      </div>
      <div className="dl__list">
        {ROWS.map((r) => (
          <article key={r.os} className="dl" data-os={r.os}>
            <div className="dl__id">
              <h3>rolboard-mcp</h3>
              <p className="dl__meta">
                {r.name} · {r.meta}
              </p>
            </div>
            <Rich as="p" k={r.note} className="dl__note" />
            <a className="btn btn--ghost" href={dl.mcp[r.os]}>
              <T k={r.btn} />
            </a>
          </article>
        ))}
      </div>
      <p className="downloads__all">
        <a href="/agents#how-it-works">
          <T k="dl.mcp.link" />
        </a>
      </p>
    </section>
  );
}
