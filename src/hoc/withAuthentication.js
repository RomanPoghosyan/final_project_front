import React from "react";
import {useSelector} from "react-redux";
import {getIsAuth} from "../redux/User/user-selectors";

const withAuthentication = (Component) => {
    return function () {
        const isAuth = useSelector(getIsAuth);
        return <Component isAuth={isAuth}/>
    }
};

export default withAuthentication;