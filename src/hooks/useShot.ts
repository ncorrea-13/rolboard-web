import { useLang } from "../i18n/lang";

/** Screenshots live in assets/screens (Spanish UI) and assets/screens/en (English UI). */
export function useShot() {
  const { lang } = useLang();
  return (name: string) =>
    `/assets/screens/${lang === "en" ? "en/" : ""}${name}.jpg`;
}
