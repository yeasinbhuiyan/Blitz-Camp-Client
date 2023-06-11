import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '/logo.png';

// import Logo from '../Shared/Navbar/Logo'


import { GrLogout } from 'react-icons/gr'

import { AiOutlineBars } from 'react-icons/ai'
import { AuthContext } from '../../AuthProviders/AuthProviders'
import DashboardLink from './DashboardLink'

import useStatus from '../../Hook/useStatus'
import { FaHome } from 'react-icons/Fa'



const Sidebar = () => {
    const navigate = useNavigate()
    // const [toggle, setToggle] = useState(false)

    const { user, logOut } = useContext(AuthContext)

    const { status } = useStatus()
    console.log(status)

    const [isActive, setActive] = useState('false')

    // const toggleHandler = event => {
    //     setToggle(event.target.checked)
    // }

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }









    // Theme start
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const handleToggle2 = (e) => {
        if (e.target.checked) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])



    return (
        <>

            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>



                    {/* ToDo  */}


                    {/* For Dark/Light Mode */}


                    <div className='block cursor-pointer p-4 font-bold'>



                        <h1 className="font-bold flex items-center w-full"><span className="text-2xl text-gradient flex items-center">  <img src={logo} className="w-6 mr-2" alt="" />  Blitz</span>  <sub className="font-mono md:w-0 w-1 text-sm ml-1"><small>Camp</small></sub></h1>

                    </div>

                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}

            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >













                <div>
                    {/* Branding & Profile Info */}




                    <div>

                      <div className='flex items-center space-x-8'>
                          {/* day night button */}
                          <div className=' top-0 left-1'>
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox"
                                    onChange={handleToggle2}
                              
                                />

                                {/* sun icon */}
                                <svg
                                    className="swap-on fill-current w-10 md:h-8 md:w-8 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off fill-current w-10 md:h-7 md:w-7 h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>

                        </div>

                        {/* To Do  */}
                        <div className='w-full hidden md:flex py-2 justify-center items-center mx-auto'>
                            <h1 className="font-bold flex items-center w-full"><span className="text-2xl text-gradient flex items-center">  <img src={logo} className="w-6 mr-2" alt="" />  Blitz</span>  <sub className="font-mono md:w-0 w-1 text-sm ml-1"><small>Camp</small></sub></h1>

                        </div>
                      </div>





                        <div className='flex flex-col items-center mt-6 -mx-2'>

                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>

                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>

                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}


                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>

                            {status && <DashboardLink></DashboardLink>

                            }




                        </nav>


                    </div>


                </div>

                <div>
                    <hr />


                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>

                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
