import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { useDownloads } from "../hooks/useDownloads";
import { Downloads } from "../sections/Downloads";
import { InstallHelp } from "../sections/InstallHelp";

export function Download() {
  const dl = useDownloads();
  return (
    <Layout page="download">
      <PageHead aura eyebrow="dl.eyebrow" title="dl.title" lead="dl.sub" />
      <Downloads dl={dl} />
      <InstallHelp />
    </Layout>
  );
}
