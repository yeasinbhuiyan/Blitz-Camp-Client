import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProviders/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hook/UseAxiosSecure';
import { Helmet } from 'react-helmet-async';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);
const Payment = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    // todo 

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selected-class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/select-class/${user?.email}`)
            return res.data

        }

    })

    const { id } = useParams()


    const selectClassPay = selectedClasses.find(sf => sf._id === id)
    console.log(selectedClasses)


    return (
        <div>
             <Helmet>
                <title>Biltz Camp | Payment</title>
            </Helmet>
            {
                selectClassPay && <Elements stripe={stripePromise}>
                    <CheckOutForm selectClassPay={selectClassPay}></CheckOutForm>

                </Elements>
            }
        </div>
    );
};

export default Payment;