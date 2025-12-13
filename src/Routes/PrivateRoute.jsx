import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {


    const { user, loading } = use(AuthContext);


    if (loading) {
        return <div className="flex items-center justify-center mt-20">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to={'/register'}></Navigate>


};

export default PrivateRoute;