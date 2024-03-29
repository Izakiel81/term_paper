import { useQuery } from "react-query";
import { TRANSACTIONS } from "../../consts/QueryConsts";
import { getAllTransactions } from "../../API/transactionAPI";

export const useTransactions = () => {
  return useQuery([TRANSACTIONS], getAllTransactions, {
    enabled: false,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
