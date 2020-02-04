import React from "react";
import TextField from "@material-ui/core/TextField";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {Button} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {renderTextField} from "../../common/FormControlls/FormControlls";

let maxLength15 = maxLengthCreator(15);

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.className}>
            <Field label={"Login"} id="standard-basic" name={"login"} component={renderTextField} validate={[required]} />
            <Field label={"Password"} id="standard-password" name={"password"} component={renderTextField} validate={[required, maxLength15]} />
            <Button type={"submit"} variant={"contained"} color={"primary"}>Sign In</Button>
        </form>
    );
};

const SignInReduxForm = reduxForm({form: "login"})(SignInForm);

const SignIn = () => {
    const classes = useStyles();

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign In</h2>}/>
            <SignInReduxForm onSubmit={onSubmit} className={classes.form}/>
        </div>
    );
};

export default SignIn;

