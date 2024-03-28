import axios from "axios";
import { API_URL_TO_PROPERTY_REVIEWS } from "../consts/APIConsts";
import { PropertyReview } from "../interfaces/PropertyReview";

export const getPropertyReviewByPropertyId = async ({ propertyId }: { propertyId: number }) => {
    const res = await axios.get<PropertyReview[]>(API_URL_TO_PROPERTY_REVIEWS  + "property/" + propertyId);

    return res.data;
}