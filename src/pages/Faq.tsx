import { Layout } from "../components/Layout";
import { Faq as FaqList } from "../sections/Faq";
import { Report } from "../sections/Report";
import { SyncGuide } from "../sections/SyncGuide";

export function Faq() {
  return (
    <Layout page="faq">
      <FaqList />
      <SyncGuide />
      <Report />
    </Layout>
  );
}
