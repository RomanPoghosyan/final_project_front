import React from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import withAuthentication from "../../../hoc/withAuthentication";
import {signup} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import SignUpForm from "./SignUpForm/SignUpForm";


const SignUp = () => {
    const classes = useStyles();

    const signupDispatch = useDispatch();

    const onSubmit = (formData) => {
        signupDispatch(signup(formData));
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign Up</h2>}/>
            <SignUpForm className={classes.form} onSubmit={onSubmit}/>
        </div>
    );
};


export default withAuthentication(SignUp);