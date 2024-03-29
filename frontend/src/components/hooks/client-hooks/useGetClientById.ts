import { useQuery } from "react-query";
import { CLIENTS } from "../../consts/QueryConsts";
import { getClientById } from "../../API/clientAPI";

export const useGetClientById = ({ id }: { id: number }) => {
  return useQuery([CLIENTS, id], () => getClientById({id}), {
    enabled: false,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
