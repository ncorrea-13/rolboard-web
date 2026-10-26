import { useEffect, useState } from "react";

export type Platform = "windows" | "linux" | "android";

const RELEASES = "https://github.com/ncorrea-13/rolboard/releases/latest";
// Anchored: the release also holds rolboard-mcp-windows-amd64-*.exe, which is not the app.
const PATTERNS: Record<Platform, RegExp> = {
  windows: /^rolboard-windows-amd64.*\.exe$/,
  linux: /^rolboard-linux-(amd64|x86_64).*\.AppImage$/,
  android: /android-arm64.*\.apk$/,
};

export type McpPlatform = "windows" | "linux";

const MCP_PATTERNS: Record<McpPlatform, RegExp> = {
  windows: /^rolboard-mcp-windows-amd64.*\.exe$/,
  linux: /^rolboard-mcp-linux-amd64/,
};

function detectOS(): Platform | null {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Android/i.test(ua)) return "android";
  if (/Linux/i.test(ua)) return "linux";
  return null;
}

export function useDownloads() {
  const [os, setOs] = useState<Platform | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [urls, setUrls] = useState<Record<Platform, string>>({
    windows: RELEASES,
    linux: RELEASES,
    android: RELEASES,
  });
  const [mcp, setMcp] = useState<Record<McpPlatform, string>>({
    windows: RELEASES,
    linux: RELEASES,
  });

  useEffect(() => {
    setOs(detectOS());
    const ctrl = new AbortController();
    fetch("https://api.github.com/repos/ncorrea-13/rolboard/releases/latest", {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((release) => {
        if (!release?.tag_name) return;
        setTag(release.tag_name);
        setUrls((prev) => {
          const next = { ...prev };
          for (const p of Object.keys(PATTERNS) as Platform[]) {
            const asset = release.assets?.find((a: { name: string }) =>
              PATTERNS[p].test(a.name),
            );
            if (asset) next[p] = asset.browser_download_url;
          }
          return next;
        });
        setMcp((prev) => {
          const next = { ...prev };
          for (const p of Object.keys(MCP_PATTERNS) as McpPlatform[]) {
            const asset = release.assets?.find((a: { name: string }) =>
              MCP_PATTERNS[p].test(a.name),
            );
            if (asset) next[p] = asset.browser_download_url;
          }
          return next;
        });
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return { os, tag, urls, mcp };
}
