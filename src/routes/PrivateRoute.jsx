import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    
    if(user){
        return children;
    }
    return <Navigate to="/login" replace state={{from: location}} />
};

export default PrivateRoute;
/* 
 ===== steps ====
 1. chexk user is logged in or not 
 2. if user is logged in then allow then to visit the route
 3. else redirect the user to the login page 
 4. setup the private route
*/