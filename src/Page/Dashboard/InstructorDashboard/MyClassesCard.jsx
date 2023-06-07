import React, { useState } from 'react';

const MyClassesCard = () => {

    const [readMore, setreadMore] = useState(false)
    return (
        <div className='my-10'>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96 h-64' src={image} alt="Movie" /></figure>


                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-sm font-semibold'><span className='font-bold me-2'>Ingredients:</span> {ingredients}</p>

                    <div className='lg:flex hidden read-more'>
                        {
                            !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Cooking:</span>{details.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                <p className='text-sm font-medium md:w-full w-60'><span className='font-bold me-2'>Cooking:</span>{details}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                        }
                    </div>

                    <div className='lg:hidden md:read-more'>
                        {
                            !readMore ? <p className='text-sm font-medium w-60 md:w-80'><span className='font-bold me-2'>Cooking:</span>{details.slice(0, 70)}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read more</span></p> :
                                <p className='text-sm font-medium md:w-96 w-60'><span className='font-bold me-2'>Cooking:</span>{details}<span onClick={() => setreadMore(!readMore)} className='text-gray-600 font-bold cursor-pointer'>...read less</span></p>


                        }
                    </div>




                </div>
            </div>
        </div>
    );
};

export default MyClassesCard;