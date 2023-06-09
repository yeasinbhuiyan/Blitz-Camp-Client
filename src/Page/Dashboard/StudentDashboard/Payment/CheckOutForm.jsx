import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProviders/AuthProviders";
import { CardElement, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = ({ selectedClasses, price }) => {


    // Todo 
    const stripe = useStripe();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransaction] = useState('')



    // useEffect(() => {


    //     if (price > 0) {
    //         axiosSecure.post('/create-payment-intent', { price })
    //             .then(res => {
    //                 console.log(res.data.clientSecret)
    //                 setClientSecret(res.data.clientSecret)
    //             })
    //     }
    // }, [price, axiosSecure])

    const handleSubmit = () => {




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