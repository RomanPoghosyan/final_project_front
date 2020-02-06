import React from "react";
import {useSelector} from "react-redux";

function withAuthentication ( Component ) {
    return function () {
        const isAuth = useSelector(state => state.auth.isAuth);
        return <Component isAuth={isAuth} />
    }
}

export default withAuthentication;