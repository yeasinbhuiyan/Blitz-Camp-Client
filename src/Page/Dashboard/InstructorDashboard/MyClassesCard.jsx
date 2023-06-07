import { useState } from 'react';
import { MdPendingActions } from 'react-icons/Md';
import { FcApproval , FcDeleteRow } from 'react-icons/fc';


const MyClassesCard = ({ singleClass }) => {

    const [readMore, setreadMore] = useState(false)
    const { class_image, class_name, available_seats, price, status, enrolled, feedback } = singleClass
    return (
        <div className='my-10'>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96 h-full' src={class_image} alt="Movie" /></figure>


                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">{class_name}</h2>
                    <p className='text-lg font-semibold'><span className='font-lg me-2'>Available Seats: </span> {available_seats}</p>

                    <p className='text-lg font-semibold'><span className='font-semibold me-2'>Total Enroll: </span> {enrolled}</p>
                    <p className='text-xl font-semibold'><span className='font-bold text-2xl me-2'>Price: </span> ${price}</p>

                    {
                        feedback && <div className='lg:flex hidden read-more'>
                            {

                                !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Feedback:</span>{feedback.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                    <p className='text-sm font-medium md:w-full w-60'><span className='font-bold me-2'>Feedback:</span>{feedback}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                            }
                        </div>
                    }
                    {feedback &&
                        <div className='lg:hidden md:read-more'>
                            {


                                !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Feedback:</span>{feedback.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                    <p className='text-sm font-medium md:w-96 w-60'><span className='font-bold me-2'>Feedback:</span>{feedback}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                            }
                        </div>}


                    <div className="card-actions justify-end">
                        {
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
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyClassesCard;