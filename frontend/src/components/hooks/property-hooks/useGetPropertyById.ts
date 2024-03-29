import { useQuery } from "react-query";
import { PROPERTIES } from "../../consts/QueryConsts";
import { getPropertyById } from "../../API/propertyAPI";

export const useGetPropertyById = ({ id }: { id: number }) => {
  return useQuery([PROPERTIES, id], () => getPropertyById({ id }), {
    enabled: false,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
