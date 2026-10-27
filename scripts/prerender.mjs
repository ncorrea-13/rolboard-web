// Writes one static HTML file per page from the built template, plus the sitemap and llms.txt.
import { readFile, writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const { renderPage, PAGES, ORIGIN, llmsTxt } = await import(
  pathToFileURL(resolve(root, "dist-ssr/entry-server.js")).href
);

const template = await readFile(resolve(root, "dist/index.html"), "utf8");
if (!template.includes("<!--app-html-->"))
  throw new Error("index.html: missing placeholder");

for (const page of PAGES) {
  const file =
    page.id === "index" ? "index.html" : `${page.path.slice(1)}.html`;
  await writeFile(resolve(root, "dist", file), renderPage(page.id, template));
}

const urls = PAGES.map(
  (p) => `  <url><loc>${ORIGIN}${p.path}</loc></url>`,
).join("\n");
await writeFile(
  resolve(root, "dist/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

await writeFile(resolve(root, "dist/llms.txt"), llmsTxt());

await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered: ${PAGES.map((p) => p.id).join(", ")}`);
