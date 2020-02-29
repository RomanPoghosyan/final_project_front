import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../redux/User/user-selectors";

const withAuthRedirect = (allowUnAuthorized) => (Component) => (props) => {
    const isAuth = useSelector(getIsAuth);
    if((allowUnAuthorized && !isAuth) || (!allowUnAuthorized && isAuth)) return <Component {...props} />;
    return <Redirect to={"/"} />;

};

export default withAuthRedirect;