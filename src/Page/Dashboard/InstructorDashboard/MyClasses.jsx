import { useContext} from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import MyClassesCard from "./MyClassesCard";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyClasses = () => {
    const { user } = useContext(AuthContext)
  
    const [axiosSecure] = useAxiosSecure()
   


    const { data: myClasses = [], refetch } = useQuery(['myClasses', user?.email], async () => {
        const res = await axiosSecure(`/instructor-classes/${user?.email}`)
        return res.data

    })

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do You Want Delete This Class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/instructor-class/delete/${id}`)
                    .then(data => {
                        if (data.data.acknowledged) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }

    return (
        <div>
             <Helmet>
                <title>Biltz Camp | My Classes</title>
            </Helmet>
            <div className="grid grid-cols-1 md:p-10 p-3">
                {
                    myClasses && myClasses.map(singleClass => <MyClassesCard key={singleClass._id} handleDelete={handleDelete} singleClass={singleClass}></MyClassesCard>)
                }
            </div>

        </div>
    );
};

export default MyClasses;