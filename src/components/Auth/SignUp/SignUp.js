import React, {memo} from "react";
import {Button} from "@material-ui/core";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required, onlyCharacters, emailChecker, maxLengthCreator} from "../../../utils/validators/validators";
import {renderTextField} from "../../common/FormControlls/FormControlls";
import PropTypes from "prop-types";
import withAuthentication from "../../../hoc/withAuthentication";
import {register} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
let maxLength15 = maxLengthCreator(15);

const SignUpForm = ({className, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={className}>
            <Field label={"First name"} name={"first_name"} component={renderTextField} validate={[required, onlyCharacters, maxLength15]}/>
            <Field label={"Last name"} name={"last_name"} component={renderTextField} validate={[required, onlyCharacters,maxLength15]}/>
            <Field label={"Username"} name={"username"} component={renderTextField} validate={[required]}/>
            <Field label={"Email"} name={"email"} component={renderTextField} validate={[required, emailChecker]}/>
            <Field label={"Password"} id="standard-password-input" name={"password"} component={renderTextField}
                   validate={[required, maxLength15]}/>
            <Button type={"submit"} variant={"contained"} color={"primary"}>Sign Up</Button>
        </form>
    );
};

SignUpForm.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func
};




const SignUpReduxForm = reduxForm({form: "signup"})(memo(SignUpForm));

const SignUp = ({isAuth}) => {
    const classes = useStyles();

    const signupDispatch = useDispatch();

    if (isAuth) {
        return <Redirect to={"/"}/>
    }

    const onSubmit = (formData) => {
        signupDispatch(register(formData));
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign Up</h2>}/>
            <SignUpReduxForm className={classes.form} onSubmit={onSubmit}/>
        </div>
    );
};

SignUp.propTypes = {
    isAuth: PropTypes.bool.isRequired
};

export default withAuthentication(SignUp);