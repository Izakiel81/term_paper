import { useQuery } from "react-query"
import { CLIENTS } from "../../consts/QueryConsts"
import { getAllClients } from "../../API/clientAPI"

export const useClients = () => {
    return useQuery([CLIENTS], getAllClients, {
        enabled: false,
        onError: (error: Error) => {
            console.log(error)
        }
    })
}