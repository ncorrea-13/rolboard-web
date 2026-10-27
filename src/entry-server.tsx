import { renderToString } from "react-dom/server";
import { App } from "./App";
import { fillTemplate, llmsTxt } from "./meta";
import { ORIGIN, PAGES, type PageId } from "./site";

export { ORIGIN, PAGES, llmsTxt };

export function renderPage(id: PageId, template: string) {
  const html = renderToString(<App page={id} />);
  return fillTemplate(template, id).replace("<!--app-html-->", () => html);
}
