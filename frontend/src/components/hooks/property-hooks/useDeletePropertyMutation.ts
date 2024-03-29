import { useMutation } from "react-query";
import { deleteProperty } from "../../API/propertyAPI";

export const useDeletePropertyMutation = () => {
    return useMutation({
        mutationFn: deleteProperty,
        onError: (error: Error) => {
            console.log(error);
        },
    });
};  