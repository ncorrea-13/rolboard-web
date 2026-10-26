import { Layout } from "../components/Layout";
import { Crack } from "../components/Ornaments";
import { AgentsHero } from "../sections/AgentsHero";
import { AgentsLimits } from "../sections/AgentsLimits";
import { AgentsPaths } from "../sections/AgentsPaths";

export function Agents() {
  return (
    <Layout page="agents">
      <AgentsHero />
      <Crack />
      <AgentsPaths />
      <AgentsLimits />
    </Layout>
  );
}
