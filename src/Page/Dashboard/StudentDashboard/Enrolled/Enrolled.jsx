import { useContext, useEffect } from 'react';
import useAxiosSecure from '../../../../Hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthProviders/AuthProviders';
import moment from 'moment/moment';
import { Helmet } from 'react-helmet-async';

const Enrolled = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: enroll = [], refetch } = useQuery(['enroll', user?.email], async () => {
        const res = await axiosSecure(`/enroll/${user?.email}`)
        return res.data

    })

    // console.log(enroll,'enroll')
    return (
        <>
            <Helmet>
                <title>Blitz Camp | Enroll Details</title>
            </Helmet>
            {/* <h1>payment Length : {enroll.length}</h1> */}
            {
                user && <div className='container mx-auto px-4 sm:px-8'>
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
                                                Class Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                            >
                                                Instructor
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                            >
                                                Enroll Date

                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-xs uppercase font-bold'
                                            >
                                                Enroll Time

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
                                        {enroll &&
                                            enroll.map(enrollData => (
                                                <>
                                                    <tr>
                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                            <div className='flex items-center'>

                                                                <div className='ml-3'>
                                                                    <p className='text-gray-900 text-sm whitespace-no-wrap'>{enrollData?.className}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                            <p className='text-gray-900 text-sm whitespace-no-wrap'>{enrollData?.instructorName}</p>
                                                        </td>

                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                            <p className='text-gray-900 text-sm whitespace-no-wrap'>{moment(enrollData?.date).format('L')}</p>
                                                        </td>

                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                            <p className='text-gray-900 text-sm whitespace-no-wrap'>{moment(enrollData?.date).format('LT')}</p>
                                                        </td>
                                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                                                            <p className='text-gray-900 whitespace-no-wrap'>${enrollData?.price}</p>
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
            }
        </>
    );
};

export default Enrolled;