

const SingleClassesCard = ({ singleClass }) => {
    return (
        <div className='my-4'>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure><img className='w-60 h-72' src={singleClass?.class_image} alt="Movie" /></figure>


                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">{singleClass?.class_name}</h2>
                    <div className="mt-5">
                        <p className='text-lg font-semibold'><span className='font-lg me-2'>Available Seats: </span> {singleClass?.available_seats}</p>

                        <p className='text-lg font-semibold'><span className='font-semibold me-2'>Total Enroll: </span> {singleClass?.enrolled}</p>
                        <p className='text-xl font-semibold'><span className='font-bold text-2xl me-2'>Price: </span> ${singleClass?.price}</p>

                    </div>
                    {/* <span onClick={() => handleDelete(_id)} className='absolute top-0 right-0 bg-red-600 bg-opacity-40 cursor-pointer rounded-full mx-3 my-2 h-6 w-6 flex'><RxCross1 className='mt-1 ms-1 items-center'></RxCross1></span> */}




                    {/* <div className="card-actions justify-end">
                        {
                            status === 'pending' ?
                                <>

                                    <span className='bg-cyan-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><MdPendingActions></MdPendingActions> Pending</span>
                                </> :
                                status === 'approve' ?
                                    <>
                                        <span className='bg-green-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><FcApproval></FcApproval> Approved</span>

                                    </> :


                                    <>

                                        <span className='bg-red-500 bg-opacity-20  rounded-md p-1 px-2 flex items-center'><FcDeleteRow className='me-1'></FcDeleteRow> Denied</span>


                                    </>
                        }
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default SingleClassesCard;