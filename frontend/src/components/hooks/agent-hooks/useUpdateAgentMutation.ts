import { useMutation } from "react-query";
import { updateAgent } from "../../API/agentAPI";

export const useUpdateAgentMutation = () => {
  return useMutation({
    mutationFn: updateAgent,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
