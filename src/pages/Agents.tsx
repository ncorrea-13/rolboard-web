import { Layout } from "../components/Layout";
import { Crack } from "../components/Ornaments";
import { AgentsHero } from "../sections/AgentsHero";
import { AgentsOptional } from "../sections/AgentsOptional";
import { AgentsLimits } from "../sections/AgentsLimits";
import { AgentsPaths } from "../sections/AgentsPaths";

export function Agents() {
  return (
    <Layout page="agents">
      <AgentsHero />
      <AgentsOptional />
      <Crack />
      <AgentsPaths />
      <AgentsLimits />
    </Layout>
  );
}
