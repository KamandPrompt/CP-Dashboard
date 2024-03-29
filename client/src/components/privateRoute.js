import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    let auth = sessionStorage.getItem("authToken");
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
