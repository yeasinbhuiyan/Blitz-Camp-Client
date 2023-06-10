

import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';

import Swal from 'sweetalert2';
import Spinner from '../Shared/Spinner/Spinner';
import { AuthContext } from '../AuthProviders/AuthProviders';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children
    }

    Swal.fire('You have to login first')
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;