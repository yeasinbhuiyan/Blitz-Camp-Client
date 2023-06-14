import { useQuery } from "@tanstack/react-query";
import ManageUsersRow from "./ManageUsersRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Helmet } from "react-helmet-async";



const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
   



    const { data: allUsers = [], refetch } = useQuery(['allUsers'], async () => {
        const res = await axiosSecure('/users')
        return res.data

    })


    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to Admin him?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes i Want'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)


                    .then(data => {
                        console.log(data)
                        if (data.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${user.name} is an Admin Now`,
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })

            }
        })


    }




    const handleMakeInstructor = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to Instructor him?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes i Want'
        }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.patch(`/users/instructor/${user._id}`)

                 
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `${user?.name} is an Instructor Now`,
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }

                    })

            }
        })


    }





    const handleDelete = (singleUser) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/delete/${singleUser._id}`)

                    .then(data => {
                        console.log(data)
                        if (data.data.acknowledged) {

                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }




                    })









            }
        })


    }



    return (
        <div className='container mx-auto px-4 sm:px-8'>
             <Helmet>
                <title>Blitz Camp | Manage Users</title>
            </Helmet>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full  shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full  leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        User Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        user Email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        {/* <span className=""> </span> */}
                                        Make Admin
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5  py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Make Instructor
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers &&
                                    allUsers.map(singleUser => (
                                        <ManageUsersRow
                                            key={singleUser._id}
                                            singleUser={singleUser}
                                            refetch={refetch}
                                            handleMakeAdmin={handleMakeAdmin}
                                            handleMakeInstructor={handleMakeInstructor}
                                            handleDelete={handleDelete}
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;