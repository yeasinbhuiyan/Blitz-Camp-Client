/* eslint-disable react-hooks/rules-of-hooks */

import { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';
import useStatus from '../../Hook/useStatus';
import { useForm } from "react-hook-form";
import { ImSpinner9 } from 'react-icons/im'
import { Helmet } from 'react-helmet-async';
import './SignUp.css'


const img_hosting_token = import.meta.env.VITE_Sign_In_Image_upload_token
const SignUp = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const { loading, setLoading } = useContext(AuthContext)
    const { statusRefetch } = useStatus()



    const { createAccount, userName } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()



    const onSubmit = (data) => {


        setLoading(true)

        const formData = new FormData()
        formData.append('image', data?.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const name = data.name
                    const email = data.email
                    const password = data.password
                    const img = imgResponse.data.display_url

                    createAccount(email, password)
                        .then(result => {
                            const newAccount = result.user
                            console.log(newAccount)
                            userName(name, img)

                                .then(() => {

                                    const userInfo = { name: name, email: email, image: img, status: 'student' }

                                    fetch('https://blitz-camp-server.vercel.app/users', {
                                        method: 'PUT',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(userInfo)

                                    })
                                        .then(res => res.json())
                                        .then(data => {

                                            if (data.modifiedCount || data.upsertedCount) {
                                                reset()
                                                statusRefetch()
                                                setLoading(false)

                                                Swal.fire({
                                                    position: 'top-end',
                                                    icon: 'success',
                                                    title: 'Successfully Created User',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })

                                                const from = location.state?.from?.pathname || '/'
                                                navigate(from)


                                            }


                                        })

                                })

                        })
                        .catch((error) => {
                            setLoading(false)
                            console.log(error.message)
                            setError('Please Give Me Valid Email')
                        })

                }

            })

    }





    return (
       <div className='signUp-banner'>
            <Helmet>
                <title>Blitz Camp | Sign Up</title>
            </Helmet>
       
       <form onSubmit={handleSubmit(onSubmit)} className="signUp-banner md:hero py-24 min-h-screen bg-base-200">
            <div className="flex-col p-10 ">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Please Register</h1>
                </div>

                <div className="flex-shrink-0 rounded-lg  w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  {...register("name", { required: true })} name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>



                        <div className="form-control">
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image
                                </label>
                                <input
                                    {...register("image", { required: true })}
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                    required
                                />
                            </div>


                            {errors.email && <span className='text-sm mt-3 text-red-600'>Please Select Your Photo.</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className='text-sm mt-3 text-red-600'>Please enter a valid email address</span>}
                        </div>

                        {/* {email && <p className='text-sm text-red-700'><small>{emailError}</small></p>
                        } */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/ })} name='password' type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className='text-sm mt-3 text-red-600'>Password must be at least 6 characters long and include at least one capital letter and one special characte</span>}
                        </div>

                        {/* {password && <p className='text-sm text-red-700'><small>{passwordError}</small></p>
                        } */}



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>

                            <input  {...register('confirmPassword', {
                                validate: (value) => value === watch('password') || 'Passwords do not match'
                            })} name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered" required />
                            {errors.confirmPassword && <p className='text-red-400 text-sm'>{errors.confirmPassword.message}</p>}
                        </div>




                        <div className="form-control mt-6">

                            {/* disabled={!email || !password || !img || !name || passwordError || emailError} */}
                            <button className="btn btn-success" disabled={loading}>
                                {loading ? (
                                    <ImSpinner9 className='m-auto animate-spin' size={24} />
                                ) : (
                                    'Register'
                                )}

                            </button>
                        </div>
                        <p><small>Already have an account? <Link className='font-semibold' to='/login'>Login</Link></small></p>
                        <p className='text-red-400 text-sm'>{error}</p>

                    </div>
                </div>
            </div>
        </form></div>
    );
};

export default SignUp;