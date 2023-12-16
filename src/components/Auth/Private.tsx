import React from "react";
import { Login } from "./Login";
import { profileProps } from "./Profile";

type privateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<profileProps>
}

export const Private = ({ isLoggedIn, component: Component}: privateProps) => {
    if(isLoggedIn){
        return <Component name="Sairam" />
    }else{
        return <Login />
    }
}
