
const getStatus = (userDetails) => {


    console.log(userDetails)
    if (userDetails?.email) {
        fetch(`https://blitz-camp-server.vercel.app/users/${userDetails?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.status)
                return data.status
            })

    }

}


export default getStatus;


