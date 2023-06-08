import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { FcApprove } from 'react-icons/fc';
import Swal from 'sweetalert2';


const ManageClasses = () => {
    const [readMore, setreadMore] = useState(false)
    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await fetch('http://localhost:5000/all-classes')
        return res.json()

    })

    const handleApprove = (classDetails) => {
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

                fetch(`http://localhost:5000/user/admin/${classDetails._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    }

                })
                    .then(data => {
                        // console.log(data)
                        if (data.ok) {
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
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('ashcheeee')

            }
        })



    }

    console.log(allClasses)
    return (
        <div>

            <div className='grid grid-cols-1 p-10'>
                {
                    allClasses && allClasses.map(allClass => <>
                        <div className='my-10'>
                            <div className="card md:card-side bg-base-100 shadow-xl">
                                <figure><img className='w-96 h-96' src={allClass?.class_image} alt="Movie" /></figure>


                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-semibold">{allClass?.instructor_name}</h2>
                                    <p className='text-sm font-bold'>{allClass?.instructor_email}</p>

                                    <h2 className="card-title text-xl font-semibold">{allClass?.class_name}</h2>
                                    <p className='text-lg font-semibold'><span className='font-lg me-2'>Available Seats: </span> {allClass?.available_seats}</p>

                                    <p className='text-lg font-semibold'><span className='font-semibold me-2'>Total Enroll: </span> {allClass?.enrolled}</p>
                                    <p className='text-xl font-semibold'><span className='font-bold text-2xl me-2'>Price: </span> ${allClass?.price}</p>

                                    {
                                        allClass.feedback && <div className='lg:flex hidden read-more'>
                                            {

                                                !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Feedback:</span>{allClass?.feedback.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                                    <p className='text-sm font-medium md:w-full w-60'><span className='font-bold me-2'>Feedback:</span>{allClass?.feedback}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                                            }
                                        </div>
                                    }
                                    {allClass.feedback &&
                                        <div className='lg:hidden md:read-more'>
                                            {


                                                !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Feedback:</span>{allClass.feedback.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                                    <p className='text-sm font-medium md:w-96 w-60'><span className='font-bold me-2'>Feedback:</span>{allClass.feedback}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                                            }
                                        </div>}


                                    <div className="card-actions flex gap-4 items-center justify-end">
                                        {/* {
                                            status === 'pending' ?
                                                <>

                                                    <span className='bg-cyan-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><MdPendingActions></MdPendingActions> Pending</span>
                                                </> :
                                                status === 'approved' ?
                                                    <>
                                                        <span className='bg-green-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><FcApproval></FcApproval> Approved</span>

                                                    </> :


                                                    <>

                                                        <span className='bg-red-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><FcDeleteRow className='me-1'></FcDeleteRow> Denied</span>


                                                    </>
                                        } */}



                                        {
                                            allClass?.status === 'approve' ? <><span className='font-semibold text-sm flex items-center'><FcApprove></FcApprove> Approved</span></> :
                                                allClass?.status === 'denied' ? <><span className='font-semibold text-sm flex items-center'><RxCrossCircled></RxCrossCircled> Denied</span></> :
                                                    <>

                                                        <div>
                                                            <button onClick={() => handleApprove(allClass)} className='btn font-semibold bg-green-500 hover:bg-green-500 btn-xs flex items-center'><FcApprove></FcApprove> Approve</button>
                                                        </div>

                                                        <div>
                                                            <button onClick={() => handleDenied(allClass)} className='btn font-semibold bg-red-500 hover:bg-red-500 btn-xs flex items-center'><RxCrossCircled></RxCrossCircled> Denied</button>
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