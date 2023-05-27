/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, {useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
      return <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    }

    if(user){
        return children;
    }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}
