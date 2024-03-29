import { useMutation } from "react-query";
import { addProperty } from "../../API/propertyAPI";

export const useAddPropertyMutation = () => {
    return useMutation({
        mutationFn: addProperty,
        onError: (error: Error) => {
            console.log(error);
        },
    });
};