import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProviders/AuthProviders';
import SelectedClassCard from './SelectedClassCard';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/UseAxiosSecure';

const SelectedClass = () => {
    const { user } = useContext(AuthContext)

    const [axiosSecure] = useAxiosSecure()
    const { data: selectedClasses =[] , refetch } = useQuery({
        queryKey: ['selected-class', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/select-class/${user?.email}`)
            return res.data

        }

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

                axiosSecure.delete(`/select-class/delete/${id}`)
                    .then(data => {
                        console.log(data)
                        if (data.data.acknowledged) {

                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }




                    })



            }
        })
        console.log(id)


    }

    console.log(selectedClasses)

    return (
        <div className='container mx-auto px-4 sm:px-8'>
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
                                        Class Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Instructor
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Available Seats

                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5  py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Price
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                    >
                                        Payment
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
                                {selectedClasses &&
                                    selectedClasses.map(selectedClass => (
                                        <SelectedClassCard
                                            key={selectedClass._id}
                                            selectedClass={selectedClass}
                                            refetch={refetch}
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

export default SelectedClass;