import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../AuthProviders/AuthProviders';
import useStatus from '../Hook/useStatus';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateInstructor = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    const { status, isStatusLoading } = useStatus()

    console.log(status, isStatusLoading)


    if (loading || isStatusLoading) {
        return <Spinner></Spinner>
    }
    if (user && status === 'instructor') {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default PrivateInstructor;