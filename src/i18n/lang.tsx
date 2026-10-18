import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { en } from "./en";
import { pageById, type PageId } from "../site";
import { es, type Key } from "./es";

export type Lang = "es" | "en";
type Dict = Record<Key, string>;
const dicts: Record<Lang, Dict> = { es, en };

interface LangCtx {
  lang: Lang;
  t: (key: Key) => string;
  toggle: () => void;
}

const Ctx = createContext<LangCtx | null>(null);

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang outside LangProvider");
  return ctx;
}

function readInitial(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // storage blocked: fall back to the browser language
  }
  return (navigator.languages?.[0] ?? navigator.language ?? "")
    .toLowerCase()
    .startsWith("es")
    ? "es"
    : "en";
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function LangProvider({
  page,
  children,
}: {
  page: PageId;
  children: ReactNode;
}) {
  // The server and the first client render are always Spanish (what is in the static HTML),
  // so hydration matches; the saved/browser language is applied right after mount.
  const [lang, setLang] = useState<Lang>("es");
  useEffect(() => setLang(readInitial()), []);

  const t = useCallback((key: Key) => dicts[lang][key], [lang]);
  const toggle = useCallback(() => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // storage blocked: the choice just won't persist
    }
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    const info = pageById(page);
    document.title = dicts[lang][info.metaTitle];
    setMeta('meta[name="description"]', dicts[lang][info.metaDescription]);
  }, [lang, page]);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Renders a dictionary string that holds trusted inline HTML (<em>, <code>). */
export function Rich({
  k,
  as: Tag = "span",
  className,
  id,
}: {
  k: Key;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const { t } = useLang();
  return (
    <Tag
      id={id}
      className={className}
      dangerouslySetInnerHTML={{ __html: t(k) }}
    />
  );
}

/** Plain text variant, for labels and attributes. */
export function T({ k }: { k: Key }) {
  return <>{useLang().t(k)}</>;
}

/** A page or section label: a dictionary key, or a literal proper name such as "Obsidian". */
export function Label({ l }: { l: Key | string }) {
  const { t } = useLang();
  return <>{l.includes(".") ? t(l as Key) : l}</>;
}
