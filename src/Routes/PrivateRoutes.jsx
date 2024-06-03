import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {
  const PrivateLogin = localStorage.getItem('login')
  const isAunthenticated = JSON.parse(PrivateLogin)
  
    return(
        isAunthenticated ? <Outlet/> : <Navigate to="/" />

    )
}
export default PrivateRoutes;