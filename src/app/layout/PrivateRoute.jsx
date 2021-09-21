import React from "react";
import { useSelector } from "react-redux";
import UnauthModal from "../../features/auth/UnauthModal";
import { Route } from "react-router";

export default function PrivateRoute({
    component: Component,
    prevLocation,
    ...rest
}){
    const { authenticated} = useSelector((state) => state.auth);
    return(
        <Route {...rest} render={(props) => authenticated ? <Component {...props} /> : <UnauthModal {...props}/> } />
    )
}