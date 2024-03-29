import { useMutation } from "react-query";
import { updateProperty } from "../../API/propertyAPI";

export const useUpdatePropertyMutation = () => {
    return useMutation({
        mutationFn: updateProperty,
        onError: (error: Error) => {
            console.log(error);
        },
    });
};