import React, {memo, useState} from "react";
import {FormControl, Button} from "@material-ui/core";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {renderTextField} from "../../common/FormControlls/FormControlls";
import PropTypes from "prop-types";
import {authAPI} from "../../../API/api";
import withAuthentication from "../../../hoc/withAuthentication";

const SignUpForm = ({className, handleSubmit}) => {
    return (
        <FormControl onSubmit={handleSubmit} className={className}>
            <Field label={"First name"} name={"firstName"} component={renderTextField} validate={[required]}/>
            <Field label={"Last name"} name={"lastName"} component={renderTextField} validate={[required]}/>
            <Field label={"Username"} name={"username"} component={renderTextField} validate={[required]}/>
            <Field label={"Email"} name={"email"} component={renderTextField} validate={[required]}/>
            <Field label={"Password"} id="standard-password-input" name={"password"} component={renderTextField}
                   validate={[required]}/>
            <Button type={"submit"} variant={"contained"} color={"primary"}>Sign Up</Button>
        </FormControl>
    );
};

SignUpForm.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func
};




const SignUpReduxForm = reduxForm({form: "signup"})(memo(SignUpForm));

const SignUp = ({isAuth}) => {
    const classes = useStyles(),
        [isRegistered, setIsRegistered] = useState(false);

    if (isAuth) {
        return <Redirect to={"/"}/>
    }

    if (isRegistered) {
        return <Redirect to={"/login"}/>;
    }

    const onSubmit = (formData) => {
        authAPI.register(formData.firstName, formData.lastName, formData.email, formData.login, formData.password)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setIsRegistered(true);
                }
            });
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign Up</h2>}/>
            <SignUpReduxForm className={classes.form} handleSubmit={onSubmit}/>
        </div>
    );
};

SignUp.propTypes = {
    isAuth: PropTypes.bool.isRequired
};

export default withAuthentication(SignUp);