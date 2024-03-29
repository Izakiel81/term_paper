import { useMutation } from "react-query";
import { deleteClient } from "../../API/clientAPI";

export const useDeleteClientMutation = () => {
    return useMutation({
        mutationFn: deleteClient,
        onError: (error: Error) => {
            console.log(error);
        },
    });
}; 