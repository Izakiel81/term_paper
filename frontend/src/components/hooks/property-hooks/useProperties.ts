import { useQuery } from "react-query";
import { PROPERTIES } from "../../consts/QueryConsts";
import { getAllProperty } from "../../API/propertyAPI";

export const useProperties = () => {
  return useQuery([PROPERTIES], getAllProperty, {
    enabled: false,
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
