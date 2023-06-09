import { FaTrashAlt } from "react-icons/Fa";
import { Link } from "react-router-dom";

const SelectedClassCard = ({selectedClass, handleDelete}) => {
  
    return (
        <>
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>

                    <div className='ml-3'>
                        <p className='text-gray-900 text-sm whitespace-no-wrap'>{selectedClass.class_name}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 text-sm whitespace-no-wrap'>{selectedClass?.instructor_name}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

            <p className='text-gray-900 text-sm whitespace-no-wrap'>{selectedClass?.available_seats}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <p className='text-gray-900 whitespace-no-wrap'>${selectedClass?.price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <Link to={`/dashboard/payment/${selectedClass._id}`} className="btn btn-xs font-semibold bg-yellow-400 hover:bg-yellow-500 bg-opacity-70">Pay!</Link>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button  onClick={() => handleDelete(selectedClass?._id)} className="btn whitespace-no-wrap  btn-ghost btn-xs bg-opacity-90 hover:bg-red-600   bg-red-500"><FaTrashAlt></FaTrashAlt></button>

            </td>
        </tr>
    </>
    );
};

export default SelectedClassCard;