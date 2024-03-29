import { useQuery } from "react-query"
import { AGENTS } from "../../consts/QueryConsts"
import { getAgentById } from "../../API/agentAPI"

export const useGetAgentById = ({id}: {id:number}) => {
    return useQuery([AGENTS, id], () => getAgentById({id}), {
        enabled: false,
        onError: (error: Error) => {
            console.log(error);
        }
    })
}