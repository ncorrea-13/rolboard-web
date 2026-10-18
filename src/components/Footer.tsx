import { CodeXml } from "lucide-react";
import { Github, Linkedin } from "./Brand";
import { Crack } from "./Ornaments";
import { Label, Rich, useLang } from "../i18n/lang";
import { PAGES } from "../site";

const LINKS = [
  {
    href: "https://ncorrea.com.ar",
    label: "Portfolio",
    Icon: () => <CodeXml size={18} aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/nicolas-correa-serrat/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://github.com/ncorrea-13", label: "GitHub", Icon: Github },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer aura aura--center aura--c3 aura--faint">
      <Crack />
      <div className="footer__logos" aria-hidden="true">
        <img src="/assets/logo-icon.png" alt="" width="48" height="35" />
        <img src="/assets/logo-wordmark.png" alt="" width="112" height="50" />
      </div>
      <nav className="footer__pages" aria-label={t("menu.pages")}>
        {PAGES.map((p) => (
          <a key={p.id} href={p.href}>
            <Label l={p.label} />
          </a>
        ))}
      </nav>
      <Rich as="p" k="footer.credits" className="footer__credits" />
      <div className="footer__links">
        {LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            className="icon-link"
            href={href}
            rel="noopener"
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        ))}
      </div>
      <Rich as="p" k="footer.legal" className="footer__legal" />
    </footer>
  );
}
