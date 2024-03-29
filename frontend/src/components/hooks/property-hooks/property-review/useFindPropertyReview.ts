import { useQuery } from "react-query";
import { getPropertyReviewByPropertyId } from "../../../API/propertyReviewAPI";
import { PROPERTY_REVIEWS } from "../../../consts/QueryConsts";

export const useFindPropertyReview = ({ property_id }: { property_id: number }) => {
    return useQuery(
        [PROPERTY_REVIEWS, property_id],
        () => getPropertyReviewByPropertyId({ propertyId: property_id }),
        {
            enabled: false,
            onError: (error: Error) => {
                console.log(error);
            },
        }
    );
};