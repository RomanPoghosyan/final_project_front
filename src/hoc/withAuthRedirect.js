import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const withAuthRedirect = (allowUnAuthorized) => (Component) => (props) => {
    const isAuth = useSelector(state => state.user.isAuth);
    if((allowUnAuthorized && !isAuth) || (!allowUnAuthorized && isAuth)) return <Component {...props} />;
    return <Redirect to={"/"} />;

};

export default withAuthRedirect;