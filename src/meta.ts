import { es } from "./i18n/es.ts";
import { ORIGIN, PAGES, pageById, type PageId } from "./site.ts";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function fillTemplate(template: string, id: PageId): string {
  const page = pageById(id);
  const values: Record<string, string> = {
    title: es[page.metaTitle],
    description: es[page.metaDescription],
    url: ORIGIN + page.path,
    page: id,
  };
  return template
    .replace("<!--jsonld-->", () => (id === "index" ? jsonLd() : ""))
    .replace(/\{\{(\w+)\}\}/g, (_, k: string) => esc(values[k] ?? ""));
}

function jsonLd(): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rolboard",
    description: es["meta.description"],
    url: ORIGIN,
    image: `${ORIGIN}/assets/og.png`,
    applicationCategory: "GameApplication",
    operatingSystem: "Windows, Linux, Android",
    downloadUrl: `${ORIGIN}/download`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  // "<" escaped so no string in the data can close the script tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

// Built from PAGES so a new page shows up without touching a file.
export function llmsTxt(): string {
  const pages = PAGES.map(
    (p) =>
      `- [${es[p.metaTitle]}](${ORIGIN}${p.path}): ${es[p.metaDescription]}`,
  ).join("\n");
  return `# Rolboard\n\n> ${es["meta.description"]}\n\n## Páginas\n\n${pages}\n\n## Código\n\n- [Repositorio](https://github.com/ncorrea-13/rolboard)\n`;
}
