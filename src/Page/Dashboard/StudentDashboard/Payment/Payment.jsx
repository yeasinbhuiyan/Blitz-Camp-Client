import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProviders/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);
const Payment = () => {
    const { user, loading } = useContext(AuthContext)
    // todo 

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selected-class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/select-class/${user?.email}`)
            return res.json()

        }

    })

    const { id } = useParams()


    const price = selectedClasses.find(sf => sf._id === id)
    console.log(price)
    console.log(selectedClasses)


    return (
        <div>
            {
                price && <Elements stripe={stripePromise}>
                    <CheckOutForm selectedClasses={selectedClasses} price={price.price}></CheckOutForm>

                </Elements>
            }
        </div>
    );
};

export default Payment;