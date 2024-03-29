import { useMutation } from "react-query"
import { updateClient } from "../../API/clientAPI";

export const useUpdateClientMutation = () => {
    return useMutation({
        mutationFn: updateClient,
        onError: (error: Error) => {
            console.log(error);
        },
    });
}