import React from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {useDispatch} from "react-redux";
import {login} from "../../../redux/User/actions";
import SignInForm from "./SignInForm/SignInForm";


const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(login(formData.login, formData.password));
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign In</h2>}/>
            <SignInForm onSubmit={onSubmit} className={classes.form}/>
        </div>
    );
};

export default SignIn;