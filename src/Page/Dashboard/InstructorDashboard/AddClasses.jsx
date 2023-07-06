
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { FaHome } from "react-icons/Fa";


const img_hosting_token = import.meta.env.VITE_Image_upload_token

const AddClasses = () => {
    const navigate = useNavigate()

    const [axiosSecure] = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const handleSubmit = (event) => {
        setLoading(true)

        event.preventDefault()
        const form = event.target
        const class_name = form.className.value
        // const class_image = form.classImage.files[0]
        const instructor_name = form.instructorName.value
        const instructor_email = form.instructorEmail.value
        const availableSeats = form.availableSeats.value
        const price = form.price.value
        // console.log(class_name, class_image, instructor_name, instructor_email, availableSeats, price)

        const formData = new FormData()
        formData.append('image', form.classImage.files[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log('submit hoise')
                if (imgResponse.success) {
                    const classImage = imgResponse.data.display_url
                    console.log(classImage)

                    const addedClasses = {
                        class_name,
                        class_image: classImage,
                        instructor_name,
                        instructor_email,
                        status: 'pending',
                        available_seats: parseInt(availableSeats),
                        price: parseFloat(price),
                        enrolled: parseInt(0)
                    }
                    axiosSecure.post('/added-class', addedClasses)
                        .then(data => {
                            console.log(data)
                            if (data.data.insertedId) {


                                event.target.reset()
                                setLoading(false)
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your Class Details Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/dashboard/my-classes')
                            }
                            setLoading(false)
                        })


                }
                setLoading(false)
                console.log(imgResponse)
            })



    }
    return (
        <div>
            <Helmet>
                <title>Blitz Camp | Add Classes</title>
            </Helmet>
            <div className="">
                <h1 className="text-4xl text-center font-semibold mt-10">Add Class Form</h1>
            </div>
            <form className="border shadow-xl mt-5  rounded py-10 px-10 md:px-20" onSubmit={handleSubmit}>

                <div className="card-body grid grid-cols-1 md:grid-cols-2  gap-8 p-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name='className' placeholder="Class Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>

                        <input type="file" name='classImage' className="file-input file-input-bordered w-full " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input readOnly defaultValue={user?.displayName} type="text" name='instructorName' placeholder="Instructor Name" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Instructor Email</span>
                        </label>
                        <input readOnly defaultValue={user?.email} type="email" name='instructorEmail' placeholder="Instructor Email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Available Seats</span>
                        </label>
                        <input type="number" name='availableSeats' placeholder="Available Seats" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Price </span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>

                </div>

                <div className="form-control mt-6 px-10">


                    <input disabled={loading} className="btn btn-success" type="submit" value="Add Classes" />
                </div>
            </form>
        </div>
    );
};

export default AddClasses;