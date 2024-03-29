import { Spinner, Td } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useGetAgentById } from "../../../hooks/agent-hooks/useGetAgentById";

type Props = {
  agent_id: number;
};

const AgentData: FC<Props> = ({ agent_id }) => {
  const { data, refetch } = useGetAgentById({ id: agent_id });
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });
    return <Spinner color={"purple"} />;
  }
  return <Td>{data && (data.Name)}</Td>;
};

export default AgentData;
