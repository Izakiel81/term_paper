import { useMutation } from "react-query";
import { deleteTransaction } from "../../API/transactionAPI";

export const useDeleteTransactionMutation = () => {
  return useMutation({
    mutationFn: deleteTransaction,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
