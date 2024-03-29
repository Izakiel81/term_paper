import { useMutation } from "react-query"
import { addClient } from "../../API/clientAPI"

export const useAddClientMutation = () => {
    return useMutation({
        mutationFn: addClient,
        onError: (error: Error) => {
            console.log(error);
        },
    });
}