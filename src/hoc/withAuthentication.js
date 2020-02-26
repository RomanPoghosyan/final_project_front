import React from "react";
import {useSelector} from "react-redux";

const withAuthentication = (Component) => {
    return function () {
        const isAuth = useSelector(state => state.user.currentUser.isAuth);
        return <Component isAuth={isAuth}/>
    }
};

export default withAuthentication;