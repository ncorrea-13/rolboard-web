const I18N_ATTRS = ["alt", "content", "aria-label"];

const COMMON_EN = {
  "nav.home": "Rolboard, home",
  "nav.sections": "Sections",
  "nav.features": "Features",
  "nav.download": "Download",
  "footer.credits":
    "Made by Nicolás Correa. Logos and icons by Mateo Guareschi.",
  "footer.legal":
    "Code under the MIT license. The logos and icons are not covered by it: they belong to their author and are used with permission.",
};

const REVEALED =
  ".section__head, .feature, .showcase__row, .obsidian__card, .notvtt, .faq details, .faq h2, .report__card, .dl, .downloads__all, .step, .guide-table-wrap, .guide-cta";

function initSite({ en, es: esSeed = {}, onLang = () => {} }) {
  const es = { ...esSeed };
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    es[el.dataset.i18n] = el.innerHTML.trim();
  });
  for (const attr of I18N_ATTRS) {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      es[el.getAttribute(`data-i18n-${attr}`)] = el.getAttribute(attr);
    });
  }
  const dict = { es, en: { ...COMMON_EN, ...en } };

  const toggle = document.getElementById("lang-toggle");
  function setLang(lang) {
    const t = dict[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t[el.dataset.i18n];
    });
    for (const attr of I18N_ATTRS) {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
        el.setAttribute(attr, t[el.getAttribute(`data-i18n-${attr}`)]);
      });
    }
    onLang(lang, t);
    const other = lang === "es" ? "en" : "es";
    toggle.textContent = other.toUpperCase();
    toggle.lang = other;
    toggle.setAttribute(
      "aria-label",
      other === "es" ? "Leer en español" : "Read in English",
    );
  }

  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch {}
  const browser = (navigator.languages?.[0] || navigator.language || "")
    .toLowerCase()
    .startsWith("es")
    ? "es"
    : "en";
  setLang(saved in dict ? saved : browser);

  toggle.addEventListener("click", () => {
    const lang = document.documentElement.lang === "es" ? "en" : "es";
    setLang(lang);
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  });

  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  document.querySelectorAll(REVEALED).forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) =>
      c.matches(el.tagName),
    );
    el.style.setProperty("--delay", `${(siblings.indexOf(el) % 3) * 90}ms`);
    el.classList.add("reveal");
    observer.observe(el);
  });
}
