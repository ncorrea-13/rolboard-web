import { T } from "../i18n/lang";
import { QaDetails, type Qa } from "./QaDetails";

const QA: Qa[] = [
  ["faq.updateq", "faq.updatea"],
  ["faq.q1", "faq.a1"],
  ["faq.devicesq", "faq.devicesa"],
  ["faq.q3", "faq.a3"],
];

export function InstallHelp() {
  return (
    <section className="section install-help">
      <h2 data-reveal>
        <T k="dl.help.title" />
      </h2>
      <QaDetails items={QA} />
    </section>
  );
}
