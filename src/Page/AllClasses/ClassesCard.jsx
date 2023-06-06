import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";


const ClassesCard = ({ singleClass }) => {
    
    const { name, image, instructor_name, available_seats, price } = singleClass
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name : {name}</h2>
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