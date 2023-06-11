import { useQuery } from '@tanstack/react-query';
import { RxCrossCircled } from 'react-icons/rx';
import { FcApprove } from 'react-icons/fc';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/UseAxiosSecure';
import { Helmet } from 'react-helmet-async';


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure('/all-classes')
        return res.data

    })

    const handleApprove = (classDetails) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do You Approve This Class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/user/admin/approve/${classDetails._id}`)
                    .then(data => {
                        console.log(data)
                        if (data.data.acknowledged) {
                            refetch()
                            Swal.fire(
                                'Approved!',
                                'Instructor Class Approved',
                                'success'
                            )
                        }

                    })


            }
        })

    }


    const handleDenied = (classDetails) => {
        Swal.fire({
            title: 'Give Feedback Why Denied This Class',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                // return fetch(`//api.github.com/users/${login}`)
                //     .then(response => {
                //         if (!response.ok) {
                //             throw new Error(response.statusText)
                //         }
                //         return response.json()
                //     })
                //     .catch(error => {
                //         Swal.showValidationMessage(
                //             `Request failed: ${error}`
                //         )
                //     })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {

                const feedback = result.value
                console.log(feedback)

                axiosSecure.patch(`/user/admin/denied/${classDetails._id}`, { feedback: feedback })
                    .then(data => {
                        console.log(data)

                        if (data.data.acknowledged) {
                            refetch()
                            Swal.fire(
                                'Denied!',
                                'Instructor Class Denieded',
                                'success'
                            )
                        }

                    })

            }
        })



    }

    // console.log(allClasses)
    return (
        <div>
             <Helmet>
                <title>Biltz Camp | Manage Classes</title>
            </Helmet>

            <div className='grid grid-cols-1 p-10'>
                {
                    allClasses && allClasses.map(allClass => <>
                        <div key={allClass._id} className='my-10'>
                            <div className="card md:card-side bg-base-100 shadow-xl">
                                <figure><img className='w-96 h-52 md:h-96' src={allClass?.class_image} alt="Movie" /></figure>


                                <div className="card-body">
                                    <h1 className="card-title text-3xl font-semibold">{allClass?.class_name}</h1>
                                    <p className="card-title text-2xl font-bold">{allClass?.instructor_name}</p>
                                    <p className='text-sm font-bold link-hover'>{allClass?.instructor_email}</p>

                                    <p className='text-lg font-medium'><span className='font-lg me-2'>Available Seats: </span> {allClass?.available_seats}</p>

                                    <p className='text-lg font-semibold'><span className='font-semibold me-2'>Total Enroll: </span> {allClass?.enrolled}</p>
                                    <p className='text-2xl font-semibold'><span className='font-bold me-2'>Price: </span> <span className='text-yellow-500'>${allClass?.price}</span></p>

                                    {
                                        allClass?.feedback && <div>

                                            <p className='text-sm font-medium md:w-full w-60'><span className='font-bold me-2'>Feedback:</span>{allClass?.feedback}</p>

                                        </div>
                                    }




                                    <div className="card-actions flex gap-4 items-center text-center mt-5 md:mt-0  md:justify-end">


                                        {
                                            allClass?.status === 'approve' ? <><span className='font-semibold text-sm flex items-center'><FcApprove></FcApprove> Approved</span></> :
                                                allClass?.status === 'denied' ? <><span className='font-semibold text-sm flex items-center'><RxCrossCircled></RxCrossCircled> Denied</span></> :
                                                    <>

                                                        <div>
                                                            <button onClick={() => handleApprove(allClass)} className='btn font-semibold bg-green-500 hover:bg-green-500 btn-xs flex items-center gap-2'><FcApprove></FcApprove> Approve</button>
                                                        </div>

                                                        <div>
                                                            <button onClick={() => handleDenied(allClass)} className='btn font-semibold bg-red-500 gap-2 hover:bg-red-500 btn-xs flex items-center'><RxCrossCircled></RxCrossCircled> Denied</button>
                                                        </div>
                                                    </>

                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>


            <div>

            </div>

        </div>
    );
};

export default ManageClasses;