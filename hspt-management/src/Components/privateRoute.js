import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const PrivateRoute = (props) => {
    
    const auth = localStorage.getItem('isAuth') 
    return(
        <>  
            {console.log(auth)}
            <Navigation/>
            { auth ? < Outlet /> : <Navigate to="/login"/>}
        </>
    );
}