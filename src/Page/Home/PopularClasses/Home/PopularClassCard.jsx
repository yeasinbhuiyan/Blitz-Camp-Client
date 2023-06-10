

const PopularClassCard = ({singleClass}) => {
    const { class_image, class_name, instructor_name, available_seats, price, enrolled, feedback } = singleClass
    return (
        <div className="card w-full group bg-base-100 rounded shadow-xl">

            <figure><img className="h-60 w-full  transition group-hover:scale-110 " src={class_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{class_name}</h2>
                <h2 className="card-title">Instructor: {instructor_name}</h2>

                <p className="font-semibold text-xl">Available Seat : {available_seats}</p>
                <p className="font-semibold text-xl">Enrolled : {enrolled}</p>
                <p className="font-semibold text-2xl">Price: <span className="text-yellow-500">${price}</span></p>
               
            </div>
        </div>

    );
};

export default PopularClassCard;