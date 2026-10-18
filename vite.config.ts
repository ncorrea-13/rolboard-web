import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { fillTemplate } from "./src/meta";
import { PAGES, pageFromPath } from "./src/site";

// One HTML template serves every page. In dev this plugin routes /faq, /download... to it
// and fills the metadata; in the build, scripts/prerender.mjs writes one static file per page.
function pages(): Plugin {
  return {
    name: "rolboard-pages",
    configureServer(server) {
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
