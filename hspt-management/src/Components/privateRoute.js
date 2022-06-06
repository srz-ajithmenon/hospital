import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props) => {
    console.log(props.isAuth)
    // localStorage.getItem('isAuth')
    const auth = props.isAuth; 
    console.log(auth)
    return auth ? < Outlet /> : <Navigate to="/login" />;
}