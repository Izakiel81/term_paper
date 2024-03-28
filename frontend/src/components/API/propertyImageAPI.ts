import axios from "axios";
import { API_URL_TO_PROPERTY_IMAGES } from "../consts/APIConsts";
import { PropertyImage } from "../interfaces/PropertyImage";

export const getPropertyImageByPropertyId = async ({ propertyId }: { propertyId: number }) => {
    const res = await axios.get<PropertyImage[]>(API_URL_TO_PROPERTY_IMAGES  + "property/" + propertyId);

    return res.data;
}