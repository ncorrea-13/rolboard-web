import type { ReactNode } from "react";
import { LangProvider } from "./i18n/lang";
import type { PageId } from "./site";
import { Agents } from "./pages/Agents";
import { Download } from "./pages/Download";
import { Faq } from "./pages/Faq";
import { Landing } from "./pages/Landing";
import { Obsidian } from "./pages/Obsidian";

const VIEWS: Record<PageId, () => ReactNode> = {
  index: Landing,
  obsidian: Obsidian,
  agents: Agents,
  faq: Faq,
  download: Download,
};

export function App({ page }: { page: PageId }) {
  const View = VIEWS[page];
  return (
    <LangProvider page={page}>
      <View />
    </LangProvider>
  );
}
