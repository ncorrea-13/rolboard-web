import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft } from "lucide-react";
import { useLang } from "../i18n/lang";
import type { Key } from "../i18n/es";
import { HOME_SECTIONS, PAGES } from "../site";

const ITEMS: { label: Key | string; href: string }[] = [
  ...HOME_SECTIONS,
  ...PAGES.filter((p) => p.id !== "index").map((p) => ({
    label: p.label,
    href: p.href,
  })),
  {
    label: "palette.go.github",
    href: "https://github.com/ncorrea-13/rolboard",
  },
];

const text = (t: (k: Key) => string, l: Key | string) =>
  l.includes(".") ? t(l as Key) : l;

export function CommandPalette({
  dialogRef,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((i) => text(t, i.label).toLowerCase().includes(q));
  }, [query, t]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const d = dialogRef.current;
        if (!d) return;
        if (d.open) d.close();
        else {
          setQuery("");
          d.showModal();
        }
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [dialogRef]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = results.length;
      if (n) setActive((a) => (a + (e.key === "ArrowDown" ? 1 : n - 1)) % n);
    } else if (e.key === "Enter") {
      listRef.current
        ?.querySelector<HTMLAnchorElement>('[aria-selected="true"] a')
        ?.click();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label={t("palette.label")}
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
    >
      <input
        className="palette__input"
        type="text"
        role="combobox"
        aria-expanded="true"
        aria-controls="palette-list"
        aria-activedescendant={results[active] ? `pal-${active}` : undefined}
        aria-label={t("palette.label")}
        placeholder={t("palette.placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onInputKey}
      />
      <ul
        ref={listRef}
        id="palette-list"
        className="palette__list"
        role="listbox"
      >
        {results.map((r, i) => (
          <li
            key={r.href}
            id={`pal-${i}`}
            role="option"
            aria-selected={i === active}
            className="palette__item"
            onMouseMove={() => setActive(i)}
          >
            <a href={r.href} onClick={() => dialogRef.current?.close()}>
              {text(t, r.label)}
              {i === active && <CornerDownLeft size={14} aria-hidden="true" />}
            </a>
          </li>
        ))}
      </ul>
      {results.length === 0 && (
        <p className="palette__empty">{t("palette.empty")}</p>
      )}
      <p className="palette__hint">{t("palette.hint")}</p>
    </dialog>
  );
}
