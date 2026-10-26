import { Layout } from "../components/Layout";
import { Crack } from "../components/Ornaments";
import { AgentsClients } from "../sections/AgentsClients";
import { AgentsHero } from "../sections/AgentsHero";
import { AgentsLimits } from "../sections/AgentsLimits";
import { AgentsSteps } from "../sections/AgentsSteps";

export function Agents() {
  return (
    <Layout page="agents">
      <AgentsHero />
      <Crack />
      <AgentsSteps />
      <AgentsClients />
      <AgentsLimits />
    </Layout>
  );
}
