import { useMutation } from "react-query";
import { addTransaction } from "../../API/transactionAPI";

export const useUpdateTransactionMutation = () => {
  return useMutation({
    mutationFn: addTransaction,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
