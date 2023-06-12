import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../AuthProviders/AuthProviders"



const useAdmin=()=>{

    const {user , loading} = useContext(AuthContext)
    const {data : isAdmin , isLoading : isAdminLoading} = useQuery({
        queryKey : ['isAdmin', user?.email],
        enabled: !loading,
        queryFn : async()=>{
            const res = await fetch(`https://blitz-camp-server.vercel.app/users/admin/${user?.email}`)
            return res.data.admin

        }
    })
    return [isAdmin, isAdminLoading]
}


export default useAdmin;