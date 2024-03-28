import { useMutation } from "react-query";
import { deleteAgent } from "../../API/agentAPI";

export const useDeleteAgentMutation = () => {
  return useMutation({
    mutationFn: deleteAgent,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};