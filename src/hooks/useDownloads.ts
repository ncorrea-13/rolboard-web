import { useEffect, useState } from "react";

export type Platform = "windows" | "linux" | "android";

const RELEASES = "https://github.com/ncorrea-13/rolboard/releases/latest";
const PATTERNS: Record<Platform, RegExp> = {
  windows: /windows-amd64.*\.exe$/,
  linux: /linux-(amd64|x86_64).*\.AppImage$/,
  android: /android-arm64.*\.apk$/,
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
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return { os, tag, urls };
}
