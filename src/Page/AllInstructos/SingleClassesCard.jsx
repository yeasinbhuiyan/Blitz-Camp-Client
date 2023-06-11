

const SingleClassesCard = ({ singleClass }) => {
    return (
        <div className='my-4'>
            <div className="card md:card-side bg-base-100 shadow-xl group">
                <figure><img className='w-60 h-72 transition group-hover:scale-110' src={singleClass?.class_image} alt="Movie" /></figure>


                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">{singleClass?.class_name}</h2>
                    <div className="mt-5">
                        <p className='text-lg font-semibold'><span className='font-lg me-2'>Available Seats: </span> {singleClass?.available_seats}</p>

                        <p className='text-lg font-semibold'><span className='font-semibold me-2'>Total Enroll: </span> {singleClass?.enrolled}</p>
                        <p className='text-xl font-semibold'><span className='font-bold text-2xl me-2'>Price: </span> ${singleClass?.price}</p>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleClassesCard;