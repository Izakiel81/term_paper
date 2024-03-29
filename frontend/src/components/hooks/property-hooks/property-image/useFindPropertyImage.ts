import { useQuery } from "react-query";
import { getPropertyImageByPropertyId } from "../../../API/propertyImageAPI";
import { PROPERTY_IMAGES } from "../../../consts/QueryConsts";

export const useFindPropertyImage = ({
  property_id,
}: {
  property_id: number;
}) => {
  return useQuery(
    [PROPERTY_IMAGES, property_id],
    () => getPropertyImageByPropertyId({ propertyId: property_id }),
    {
      enabled: false,
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );
};
