import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../AuthProviders/AuthProviders";




const useStatus = () => {

    const { user, loading } = useContext(AuthContext)
    const { data: status, refetch, isLoading: isStatusLoading } = useQuery({
        queryKey: ['isStatus', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(`https://blitz-camp-server.vercel.app/users/${user?.email}`)
                // console.log(res.json())
                return res.json()

            }
        }
    })
    // console.log(status)
    return { status: status?.status, statusRefetch: refetch, isStatusLoading }
}

export default useStatus;








// const getStatus = (userDetails) => {


//     console.log(userDetails)
//     if (userDetails?.email) {
//         fetch(`https://blitz-camp-server.vercel.app/users/${userDetails?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data.status)
//                 return data.status
//             })

//     }

// }


// export default getStatus;