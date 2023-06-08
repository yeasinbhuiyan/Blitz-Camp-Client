import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";



const ClassesCard = ({ singleClass }) => {

    const { class_image, class_name, instructor_name, instructor_email, available_seats, price, enrolled, feedback } = singleClass
   

    return (
        <div className="card w-full bg-base-100 shadow-xl">

            <figure><img className="h-60 w-full" src={class_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name : {class_name}</h2>
                <h2 className="card-title">Instructor Name : {instructor_name}</h2>

                <p className="font-semibold text-2xl">Available Seat : {available_seats}</p>
                <p className="font-semibold text-2xl">${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ClassesCard;