import React from "react";
import {useSelector} from "react-redux";
import {getIsAuthSelect} from "../redux/User/selectors";

const withAuthentication = (Component) => {
    return function () {
        const isAuth = useSelector(getIsAuthSelect);
        return <Component isAuth={isAuth}/>
    }
};

export default withAuthentication;