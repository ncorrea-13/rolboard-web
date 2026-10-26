import {
  BookOpen,
  CircleHelp,
  Bot,
  Download,
  House,
  type LucideIcon,
} from "lucide-react";
import type { Key } from "./i18n/es.ts";

export const ORIGIN = "https://rolboard.ncorrea.com.ar";

export type PageId = "index" | "obsidian" | "agents" | "faq" | "download";

export interface PageInfo {
  id: PageId;
  path: string;
  /** What links point at. Cloudflare serves obsidian.html at /obsidian. */
  href: string;
  /** A dictionary key, or a literal when it is a proper name (no dots). */
  label: Key | string;
  Icon: LucideIcon;
  metaTitle: Key;
  metaDescription: Key;
  topNav?: boolean;
}

export interface Anchor {
  label: Key | string;
  href: string;
}

// The site map: add a page here (plus its component in App.tsx) and the nav, menu, palette,
// footer, prerender and sitemap all pick it up.
export const PAGES: PageInfo[] = [
  {
    id: "index",
    path: "/",
    href: "/",
    label: "menu.home",
    Icon: House,
    metaTitle: "meta.title",
    metaDescription: "meta.description",
  },
  {
    id: "obsidian",
    path: "/obsidian",
    href: "/obsidian",
    label: "Obsidian",
    Icon: BookOpen,
    metaTitle: "g.meta.title",
    metaDescription: "g.meta.description",
    topNav: true,
  },
  {
    id: "agents",
    path: "/agents",
    href: "/agents",
    label: "nav.agents",
    Icon: Bot,
    metaTitle: "meta.agents.title",
    metaDescription: "meta.agents.description",
    topNav: true,
  },
  {
    id: "faq",
    path: "/faq",
    href: "/faq",
    label: "nav.faq",
    Icon: CircleHelp,
    metaTitle: "meta.faq.title",
    metaDescription: "meta.faq.description",
    topNav: true,
  },
  {
    id: "download",
    path: "/download",
    href: "/download",
    label: "nav.download",
    Icon: Download,
    metaTitle: "meta.download.title",
    metaDescription: "meta.download.description",
    topNav: true,
  },
];

export const HOME_SECTIONS: Anchor[] = [
  { label: "nav.features", href: "/#features" },
  { label: "palette.go.demo", href: "/#table-demo" },
  { label: "Android", href: "/#android" },
  { label: "not.eyebrow", href: "/#rules" },
];

export const OBSIDIAN_SECTIONS: Anchor[] = [
  { label: "g.steps.eyebrow", href: "/obsidian#how-it-works" },
  { label: "g.folders.eyebrow", href: "/obsidian#folders" },
  { label: "g.ex.eyebrow", href: "/obsidian#example" },
  { label: "g.det.eyebrow", href: "/obsidian#details" },
];

export const AGENTS_SECTIONS: Anchor[] = [
  { label: "a.steps.eyebrow", href: "/agents#how-it-works" },
  { label: "a.clients.eyebrow", href: "/agents#clients" },
  { label: "a.limits.eyebrow", href: "/agents#limits" },
];

export const FAQ_SECTIONS: Anchor[] = [
  { label: "faq.title", href: "/faq#faq" },
  { label: "sync.eyebrow", href: "/faq#sync" },
];

export const pageById = (id: PageId): PageInfo =>
  PAGES.find((p) => p.id === id)!;

export function pageFromPath(pathname: string): PageId {
  const clean = pathname.replace(/\/$/, "").replace(/\.html$/, "") || "/";
  return PAGES.find((p) => p.path === clean || p.href === clean)?.id ?? "index";
}
