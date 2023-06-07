


const getStatus = (userDetails) => {


    console.log(userDetails)
    if (userDetails?.email) {
        fetch(`http://localhost:5000/users/${userDetails?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.status)
                return data.status
            })

    }

}


export default getStatus;


// const getStatus = (email) => {
//     const status = () => {
//         fetch()

//     }

//     return [status]




// }
// export default getStatus;













// export const getStatus = async (email) => {
//     try {
//         console.log(email); // Log the email parameter for debugging purposes

//         const response = await fetch(`http://localhost:5000/users/${email}`);
//         console.log(response); // Log the response object for debugging purposes

//         const user = await response.json();
//         console.log(user); // Log the user object for debugging purposes

//         return user?.status;
//     } catch (error) {
//         console.error(error);
//         return undefined;
//     }
// };




// import { useQuery } from "@tanstack/react-query"
// import { useContext } from "react"
// import { AuthContext } from "../AuthProviders/AuthProviders"




// const getStatus=()=>{

//     const {user , loading} = useContext(AuthContext)
//     const {data : status , isLoading : isStatusLoading} = useQuery({
//         queryKey : ['get-status', user?.email],
//         enabled: !loading,
//         queryFn : async()=>{
//             const res = await fetch(`http://localhost:5000/users/${email}`)
//             console.log(res)
//             return res.data.status

//         }
//     })
//     return [status, isStatusLoading]
// }


// export default getStatus;