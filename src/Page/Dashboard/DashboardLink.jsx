
import { NavLink } from 'react-router-dom'
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { AiFillFolderAdd } from 'react-icons/ai'
import { BiSelectMultiple } from 'react-icons/Bi'
import { MdOutlineIncompleteCircle, MdPayment } from 'react-icons/Md'

import useStatus from '../../Hook/useStatus'
import { FaRegNewspaper } from 'react-icons/Fa'

const DashboardLink = () => {
    const { status } = useStatus()


    console.log(status)
    return (
        <>
            {


                status === 'admin' ?
                    <>
                        <NavLink
                            to='manage-classes'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <BsFingerprint className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Manage Classes</span>
                        </NavLink>
                        <NavLink
                            to='manage-users'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <BsFingerprint className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Manage Users</span>
                        </NavLink>


                    </>

                    :




                    status === 'instructor' ?
                        <>

                            <NavLink
                                to='/dashboard/add-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <AiFillFolderAdd className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Add Classes</span>
                            </NavLink>


                            <NavLink
                                to='/dashboard/my-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FaRegNewspaper className='w-5 h-5' />

                                <span className='mx-4 font-medium'>My Classes</span>
                            </NavLink>

                        </>
                        :



                        <>
                            {/* selected Classes  */}
                            <NavLink
                                to='/dashboard/selected-classes'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <BiSelectMultiple className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Selected Classes</span>
                            </NavLink>
                            <hr />

                            {/* Enrolled classes  */}

                            <NavLink
                                to='/dashboard/enroll'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <MdOutlineIncompleteCircle className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Enrolled Classes</span>
                            </NavLink>
                            <hr />


                            {/* Payment Classes  */}

                            <NavLink
                                to='/dashboard/all-payment-history'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <MdPayment className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Payemnt History</span>
                            </NavLink>
                            <hr />
                        </>

            }




            {!status && (
                <div className='flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
                    <GrUserAdmin className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Become A Host</span>
                </div>
            )}
        </>
    )
}

export default DashboardLink
