import { Search } from "lucide-react";
import { Github } from "./Brand";
import { Label, useLang } from "../i18n/lang";
import { PAGES, type PageId } from "../site";

export function Nav({
  page,
  onPalette,
}: {
  page: PageId;
  onPalette: () => void;
}) {
  const { lang, t, toggle } = useLang();
  const other = lang === "es" ? "en" : "es";
  return (
    <header className="nav" data-nav>
      <a
        className="nav__brand"
        href={page === "index" ? "#top" : "/"}
        aria-label={t("nav.home")}
      >
        <img src="/assets/logo-icon.png" alt="" width="40" height="29" />
        <img
          src="/assets/logo-wordmark.png"
          alt="Rolboard"
          width="96"
          height="43"
        />
      </a>
      <nav className="nav__links" aria-label={t("nav.sections")}>
        {PAGES.filter((p) => p.topNav).map((p) => (
          <a
            key={p.id}
            className="nav__opt"
            href={p.href}
            aria-current={p.id === page ? "page" : undefined}
          >
            <Label l={p.label} />
          </a>
        ))}
        <button
          className="nav__search"
          type="button"
          aria-label={t("nav.palette")}
          onClick={onPalette}
        >
          <Search size={16} aria-hidden="true" />
          <span className="nav__search-text">{t("nav.palette")}</span>
          <kbd>Ctrl K</kbd>
        </button>
        <a
          className="icon-link"
          href="https://github.com/ncorrea-13/rolboard"
          rel="noopener"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github />
        </a>
        <button
          className="nav__lang"
          type="button"
          lang={other}
          aria-label={other === "es" ? "Leer en español" : "Read in English"}
          onClick={toggle}
        >
          {other.toUpperCase()}
        </button>
      </nav>
    </header>
  );
}
