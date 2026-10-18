import { useEffect, useRef, type ReactNode } from "react";
import { CommandPalette } from "./CommandPalette";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";
import { useReveal } from "../hooks/useReveal";
import type { PageId } from "../site";
import { T } from "../i18n/lang";

export function Layout({
  page,
  children,
}: {
  page: PageId;
  children: ReactNode;
}) {
  const palette = useRef<HTMLDialogElement>(null);
  useReveal();

  useEffect(() => {
    const nav = document.querySelector("[data-nav]");
    const onScroll = () => nav?.toggleAttribute("data-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip" href="#top">
        <T k="nav.skip" />
      </a>
      <Nav
        page={page}
        onPalette={() => {
          palette.current?.showModal();
        }}
      />
      <main id="top">{children}</main>
      <Footer />
      <MobileMenu page={page} />
      <CommandPalette dialogRef={palette} />
    </>
  );
}
