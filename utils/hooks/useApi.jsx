import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
const getInstructions = async (muscle, type) => {
    return await axios.get(`https://api.api-ninjas.com/v1/exercises??difficulty=${type}muscle=${muscle}`, {
        headers: {
            "X-Api-Key": "UCUER7elJh39pQXJZSA0pg==mZ31FCMMuLzvQHaR",

        }
    })
}
export const useInstructions = (muscle, type) => {
    return useQuery(["muscle", muscle], () => getInstructions(muscle, type), {
        disabled: !muscle || !type,
        select: (data) => data.data

    })
}