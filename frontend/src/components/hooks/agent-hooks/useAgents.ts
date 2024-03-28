import { useQuery } from "react-query";
import { getAllAgents } from "../../API/agentAPI";
import { AGENTS } from "../../consts/QueryConsts";

export const useAgents = () => {
  return useQuery([AGENTS], getAllAgents, {
    enabled: false,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
