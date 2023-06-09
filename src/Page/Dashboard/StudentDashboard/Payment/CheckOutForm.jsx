import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProviders/AuthProviders";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = ({ selectClassPay }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)


    const { price, _id, class_id, class_name, available_seats, enrolled, instructor_name } = selectClassPay
    console.log(available_seats, enrolled)

    const [axiosSecure] = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransaction] = useState('')



    useEffect(() => {


        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        console.log(card)
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {

            setCardError(error.message)
        }
        else {

            setCardError('')
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || "anonymous",
                        name: user.displayName || "anonymous"
                    },
                },
            },
        );


        if (confirmError) {
            console.log(confirmError)
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransaction(paymentIntent.id)


            fetch(`http://localhost:5000/modified-class/${class_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClassPay)
            })
                .then(result => {
                    console.log(result)



                })




            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: parseInt(1),
                selectClassId: _id,

                // extraa 
                initialClassId: class_id,

                studentName: user.displayName ,

                status: 'service pending',
                className: class_name,
                instructorName: instructor_name
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.acknowledged) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Succesfull',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        navigate('/dashboard/selected-classes')

                    }
                })





        }

    }




    return (
        <>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn-primary mt-8 btn btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>


            {
                cardError && <p className='text-red-600'>
                    {cardError}
                </p>
            }
            {
                transactionId && <p className='text-green-600'>
                    transaction complete with transaction id : {transactionId}
                </p>
            }



        </>
    );
};

export default CheckOutForm;