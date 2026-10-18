import { es } from "./i18n/es";
import { ORIGIN, pageById, type PageId } from "./site";

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
