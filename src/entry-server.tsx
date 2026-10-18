import { renderToString } from "react-dom/server";
import { App } from "./App";
import { fillTemplate } from "./meta";
import { ORIGIN, PAGES, type PageId } from "./site";

export { ORIGIN, PAGES };

export function renderPage(id: PageId, template: string) {
  const html = renderToString(<App page={id} />);
  return fillTemplate(template, id).replace("<!--app-html-->", () => html);
}
