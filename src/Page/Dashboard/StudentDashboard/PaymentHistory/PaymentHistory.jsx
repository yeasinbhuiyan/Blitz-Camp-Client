import { useContext } from "react";
import useAxiosSecure from "../../../../Hook/UseAxiosSecure";
import { AuthContext } from "../../../../AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: paymentHistory = [], refetch } = useQuery(['paymentHistory',user?.email], async () => {
        const res = await axiosSecure(`/enroll/${user?.email}`)
        return res.data

    })
    console.log(paymentHistory)
    return (
        <div className='container mx-auto px-4 sm:px-8'>
             <Helmet>
                <title>Blitz Camp | All Payment History</title>
            </Helmet>
        <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full  shadow rounded-lg overflow-hidden'>
                    <table className='min-w-full  leading-normal'>
                        <thead>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                >
                                    Transaction Id
                                </th>
                              
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                >
                                    Class Name
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                >
                                    Payment Date

                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                >
                                    Payment Time

                                </th>
                                <th
                                    scope='col'
                                    className='px-5  py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                >
                                    Price
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory &&
                                paymentHistory.map( payment => (
                                    <>
                                        <tr>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <div className='flex items-center'>

                                                    <div className='ml-3'>
                                                        <p className='text-gray-900 text-xs whitespace-no-wrap'>{payment?.transactionId}</p>
                                                    </div>
                                                </div>
                                            </td>
      
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                          
                                                        <p className='text-gray-900 text-sm whitespace-no-wrap'>{payment?.className}</p>
                                                   
                                            </td>
                                         

                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                <p className='text-gray-900 text-sm whitespace-no-wrap'>{moment(payment?.date).format('L')}</p>
                                            </td>

                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                <p className='text-gray-900 text-sm whitespace-no-wrap'>{moment(payment?.date).format('LT')}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                <p className='text-gray-900 whitespace-no-wrap'>${payment?.price}</p>
                                            </td>

                                        </tr>

                                    </>

                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    );
};

export default PaymentHistory;