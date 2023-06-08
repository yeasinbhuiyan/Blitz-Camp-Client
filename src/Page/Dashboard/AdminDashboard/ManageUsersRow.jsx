import { FaTrashAlt } from "react-icons/Fa";

const ManageUsersRow = ({ singleUser , handleMakeInstructor , handleMakeAdmin , handleDelete}) => {
    console.log(singleUser)
    const { name, email, status } = singleUser


 
    return (

        <>
            <tr>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='flex items-center'>

                        <div className='ml-3'>
                            <p className='text-gray-900 text-sm whitespace-no-wrap'>{name}</p>
                        </div>
                    </div>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 text-sm whitespace-no-wrap'>{email}</p>
                </td>

                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                    <button disabled={status === 'admin'} onClick={()=> handleMakeAdmin(singleUser)} className="btn btn-xs  bg-green-600 font-semibold hover:bg-green-700 bg-opacity-70">Admin</button>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                    <button disabled={status === 'instructor'} onClick={()=> handleMakeInstructor(singleUser)} className="btn btn-xs font-semibold bg-yellow-600 hover:bg-yellow-700 bg-opacity-70">Instructor</button>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                    <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <button  onClick={() => handleDelete(singleUser)} className="btn whitespace-no-wrap bg-opacity-50 btn-ghost btn-xs  hover:text-black bg-red-600"><FaTrashAlt ></FaTrashAlt></button>

                </td>
            </tr>
        </>

    );
};

export default ManageUsersRow;