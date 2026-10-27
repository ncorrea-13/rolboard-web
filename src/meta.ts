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
  return template.replace(/\{\{(\w+)\}\}/g, (_, k: string) =>
    esc(values[k] ?? ""),
  );
}

// Built from PAGES so a new page shows up without touching a file.
export function llmsTxt(): string {
  const pages = PAGES.map(
    (p) =>
      `- [${es[p.metaTitle]}](${ORIGIN}${p.path}): ${es[p.metaDescription]}`,
  ).join("\n");
  return `# Rolboard\n\n> ${es["meta.description"]}\n\n## Páginas\n\n${pages}\n\n## Código\n\n- [Repositorio](https://github.com/ncorrea-13/rolboard)\n`;
}
