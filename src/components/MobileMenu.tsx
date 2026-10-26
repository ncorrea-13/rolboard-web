import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Sigil } from "./Ornaments";
import { Label, T, useLang } from "../i18n/lang";
import {
  AGENTS_SECTIONS,
  FAQ_SECTIONS,
  HOME_SECTIONS,
  OBSIDIAN_SECTIONS,
  PAGES,
  type Anchor,
  type PageId,
} from "../site";

const SECTIONS: Partial<Record<PageId, Anchor[]>> = {
  index: HOME_SECTIONS,
  obsidian: OBSIDIAN_SECTIONS,
  agents: AGENTS_SECTIONS,
  faq: FAQ_SECTIONS,
};

export function MobileMenu({ page }: { page: PageId }) {
  const { t } = useLang();
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();

  // The menu is a narrow-screen pattern: growing past the breakpoint closes it so the scroll lock lets go.
  useEffect(() => {
    const mq = matchMedia("(min-width: 960px)");
    const onChange = () => mq.matches && dialog.current?.close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const sections = SECTIONS[page];

  return (
    <>
      <button
        type="button"
        className="fab"
        aria-label={t("menu.open")}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <MenuIcon />
      </button>

      <dialog ref={dialog} className="menu" aria-label={t("menu.label")}>
        <Sigil className="menu__sigil" />
        <nav className="menu__list" aria-label={t("menu.label")}>
          <img
            className="menu__logo"
            src="/assets/logo-wordmark.png"
            alt=""
            width="112"
            height="50"
          />
          <p className="menu__group">
            <T k="menu.pages" />
          </p>
          {PAGES.map(({ id, Icon, label, href }) => (
            <a
              key={id}
              className="menu__item"
              data-primary={id === "download" || undefined}
              href={href}
              aria-current={id === page ? "page" : undefined}
              onClick={close}
            >
              <span className="menu__icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <Label l={label} />
            </a>
          ))}

          {sections && (
            <>
              <p className="menu__group">
                <T k="menu.here" />
              </p>
              {sections.map((s) => (
                <a
                  key={s.href}
                  className="menu__item menu__item--sub"
                  href={s.href}
                  onClick={close}
                >
                  <Label l={s.label} />
                </a>
              ))}
            </>
          )}

          <button
            type="button"
            className="menu__item menu__close"
            onClick={close}
          >
            <X size={18} aria-hidden="true" />
            <T k="menu.close" />
          </button>
        </nav>
      </dialog>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
