import { Layout } from "../components/Layout";
import { useDownloads } from "../hooks/useDownloads";
import { Also } from "../sections/Also";
import { Android } from "../sections/Android";
import { Codex } from "../sections/Codex";
import { DownloadCta } from "../sections/DownloadCta";
import { Hero } from "../sections/Hero";
import { HouseRules } from "../sections/HouseRules";
import { ObsidianBand } from "../sections/ObsidianBand";

export function Landing() {
  const dl = useDownloads();
  return (
    <Layout page="index">
      <Hero dl={dl} />
      <Codex />
      <Also />
      <Android />
      <ObsidianBand />
      <HouseRules />
      <DownloadCta dl={dl} />
    </Layout>
  );
}
