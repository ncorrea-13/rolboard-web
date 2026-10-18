import { Layout } from "../components/Layout";
import { Crack } from "../components/Ornaments";
import { GuideDetails } from "../sections/GuideDetails";
import { GuideExample } from "../sections/GuideExample";
import { GuideFolders } from "../sections/GuideFolders";
import { GuideHero } from "../sections/GuideHero";
import { GuideSteps } from "../sections/GuideSteps";
import { T } from "../i18n/lang";

export function Obsidian() {
  return (
    <Layout page="obsidian">
      <GuideHero />
      <Crack />
      <GuideSteps />
      <GuideFolders />
      <GuideExample />
      <GuideDetails />
      <section className="section guide-cta">
        <p className="guide-cta__text">
          <T k="g.more.text" />
        </p>
        <p>
          <a
            className="btn btn--ghost"
            href="https://github.com/ncorrea-13/rolboard/blob/main/docs/VAULT_INDEXER.md"
            rel="noopener"
          >
            <T k="g.more.link" />
          </a>
        </p>
      </section>
    </Layout>
  );
}
