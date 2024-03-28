import { useMutation } from "react-query";
import { addAgent } from "../../API/agentAPI";

export const useAddAgentMutation = () => {
  return useMutation({
    mutationFn: addAgent,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
