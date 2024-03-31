import { FC, useState } from "react";
import { useAgents } from "../../../hooks/agent-hooks/useAgents";
import { Select, Spinner } from "@chakra-ui/react";
import { Agent } from "../../../interfaces/Agent";

type Props = {
  setAgentId: (id: number) => void;
};

const AgentSelector: FC<Props> = ({ setAgentId }) => {
  const { data, refetch } = useAgents();
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }
  return (
    <Select
      placeholder="Select agent"
      onChange={(e) => setAgentId(parseInt(e.target.value))}
    >
      {data?.map((agent: Agent) => (
        <option value={agent.Id}>{agent.Name}</option>
      ))}
    </Select>
  );
};

export default AgentSelector;
