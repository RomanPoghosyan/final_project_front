import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const withAuthRedirect = (allowUnAuthorized) => (Component) => (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    if(!isAuth && !allowUnAuthorized) return <Redirect to={"/"} />;
    return <Component {...props} />;
};

export default withAuthRedirect;