import { describe, expect, it } from "vitest";
import { en } from "./i18n/en";
import { es } from "./i18n/es";
import { HOME_SECTIONS, OBSIDIAN_SECTIONS, PAGES, pageFromPath } from "./site";

describe("site registry", () => {
  it("has unique ids, paths and hrefs", () => {
    for (const key of ["id", "path", "href"] as const) {
      expect(new Set(PAGES.map((p) => p[key])).size).toBe(PAGES.length);
    }
  });

  it("has metadata in both languages", () => {
    for (const p of PAGES) {
      for (const k of [p.metaTitle, p.metaDescription]) {
        expect(es[k], `${p.id}: ${k} (es)`).toBeTruthy();
        expect(en[k], `${p.id}: ${k} (en)`).toBeTruthy();
      }
    }
  });

  it("resolves clean paths, old .html paths and unknown paths", () => {
    expect(pageFromPath("/faq")).toBe("faq");
    expect(pageFromPath("/faq/")).toBe("faq");
    expect(pageFromPath("/download.html")).toBe("download");
    expect(pageFromPath("/nope")).toBe("index");
  });

  it("anchors point at their own page", () => {
    expect(HOME_SECTIONS.every((a) => a.href.startsWith("/#"))).toBe(true);
    expect(
      OBSIDIAN_SECTIONS.every((a) => a.href.startsWith("/obsidian#")),
    ).toBe(true);
  });

  it("keeps control characters out of the dictionaries (a lone \\r in a Windows path became a newline)", () => {
    for (const [lang, dict] of [
      ["es", es],
      ["en", en],
    ] as const) {
      for (const [key, value] of Object.entries(dict)) {
        expect(/[\r\n\t]/.test(value), `${lang}: ${key}`).toBe(false);
      }
    }
  });
});
