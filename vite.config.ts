import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig, type Connect, type Plugin } from "vite";
import { fillTemplate, llmsTxt } from "./src/meta.ts";
import { PAGES, pageFromPath } from "./src/site.ts";

// One HTML template serves every page. In dev this plugin routes /faq, /download... to it
// and fills the metadata; in the build, scripts/prerender.mjs writes one static file per page.
// Mirrors Cloudflare's "404-page": unknown extensionless routes get public/404.html with a 404.
const notFound: Connect.NextHandleFunction = (req, res, next) => {
  const path = (req.url ?? "").split("?")[0];
  const known = PAGES.some((p) => p.path === path || p.href === path);
  if (known || path.startsWith("/@") || /\.[^/]*$/.test(path)) return next();
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end(readFileSync("public/404.html"));
};

// Vite serves .txt without a charset, which garbles the accents.
const llms: Connect.NextHandleFunction = (_req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(llmsTxt());
};

function pages(): Plugin {
  return {
    name: "rolboard-pages",
    configurePreviewServer(server) {
      server.middlewares.use(notFound);
      server.middlewares.use("/llms.txt", llms);
    },
    configureServer(server) {
      server.middlewares.use(notFound);
      server.middlewares.use("/llms.txt", llms);
      server.middlewares.use((req, _res, next) => {
        const path = (req.url ?? "").split("?")[0];
        if (
          PAGES.some(
            (p) => p.id !== "index" && (p.path === path || p.href === path),
          )
        )
          req.url = "/index.html";
        next();
      });
    },
    transformIndexHtml(html, ctx) {
      if (!ctx.server) return html; // build: keep the tokens for the prerender step
      const path = new URL(ctx.originalUrl ?? "/", "http://localhost").pathname;
      return fillTemplate(html, pageFromPath(path));
    },
  };
}

export default defineConfig({ plugins: [react(), pages()] });
