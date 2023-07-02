/* eslint-disable no-constant-condition */

import { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/Fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';

import useStatus from '../../Hook/useStatus';

import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { ImSpinner9 } from 'react-icons/im';
import './Login.css'



const Login = () => {
    const { loading, setLoading } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { statusRefetch } = useStatus()
    const { loginAccount, google } = useContext(AuthContext)

    const googelProvider = new GoogleAuthProvider


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'


    const [error, setError] = useState('')

    const onSubmit = (data) => {
        // console.log(data)


        setError('')
        // const eventTarget = event.target
        const email = data.email
        const password = data.password


        // eslint-disable-next-line no-useless-escape
        // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        //     return setError('Please Give Us Your Valid Email')

        // }




        loginAccount(email, password)




            .then(result => {
                const logged = result.user
                reset()
                setLoading(false)
                console.log(logged)


                if (from === '/instructor/all-class') {
                    navigate('/allInstructors')
                } else {

                    navigate(from)
                }

                // console.log(from)
            })

            .catch((error) => {
                setLoading(false)
                console.log(error.message)
                setError('Password Not Matched')
            })


    }



    const handleGoogleLogin = () => {
        setLoading(true)
        google(googelProvider)

            .then(result => {

                setLoading(false)
                console.log(result)
                const logged = result.user
                const userInfo = { name: logged.displayName, email: logged.email, image: logged.photoURL, status: 'student' }
                fetch('https://blitz-camp-server.vercel.app/users', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)

                })
                    .then(res => res.json())
                    .then(() => {


                        statusRefetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })


                        if (from === '/instructor/all-class') {
                            navigate('/allInstructors')
                        } else {

                            navigate(from)
                        }


                    }


                    )

            })


            .catch((error) => {
                setLoading(false)
                setError(error.message)
                console.log(error.message)
            })
    }
    return (


        <form onSubmit={handleSubmit(onSubmit)} className="login-banner main-container p-10 py-20 banner-login  md:hero min-h-screen bg-base-200">
            <Helmet>
                <title>Blitz Camp | Login</title>
            </Helmet>
            <div className="flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold">Please Login</h1>
                </div>
                <div className="rounded-lg flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100 mt-5">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* /^[A-Za-z0-9._%+-]+@gmail\.com$/i */}
                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="input input-bordered" name='email' type="text" placeholder="email" required />
                            {errors.email && <span className='text-sm mt-3 text-red-600'>Please enter a valid email address</span>}


                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/ })} className="input input-bordered" name='password' type="password" placeholder="password" required />
                            {/* {errors.password && <span className='text-sm text-red-600'>This field is required</span>} */}
                            {errors.password && <span className='text-sm mt-3 text-red-600'>Password must be at least 6 characters long and include at least one capital letter and one special characte</span>}


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn btn-success  text-white">  {loading ? (
                                <ImSpinner9 className='m-auto animate-spin' size={24} />
                            ) : (
                                'Login'
                            )}</button>
                        </div>


                        <div className="divider">OR</div>



                        <div className=' mb-3 '>
                            <div>

                                <button onClick={handleGoogleLogin} className="w-full p-2 items-center border-2 flex hover:bg-cyan-700 text-cyan-600 hover:text-white border-cyan-300 rounded-md">
                                    <FaGoogle className='mr-2'></FaGoogle>
                                    <small>Login With Google</small></button>
                            </div>

                        </div>




                        <p><small>Dont you have Account? <Link state={location.state} className='font-semibold' to='/signUp'>Register</Link></small></p>


                        <div>
                            <p className='font-semibold text-red-500'><small>{error}</small></p>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;