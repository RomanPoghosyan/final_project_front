import React from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {Button} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {renderTextField} from "../../common/FormControlls/FormControlls";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from "prop-types";

let maxLength15 = maxLengthCreator(15);

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.className}>
            <Field label={"Login"} id="standard-basic" name={"login"} component={renderTextField} validate={[required]} />
            <Field label={"Password"} id="standard-password" name={"password"} component={renderTextField} validate={[required, maxLength15]} />
            <FormHelperText error={!!props.error}>{props.error}</FormHelperText>
            <Button type={"submit"} variant={"contained"} color={"primary"}>Sign In</Button>
        </form>
    );
};

SignInForm.propTypes = {
    className: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

const SignInReduxForm = reduxForm({form: "login"})(SignInForm);

const SignIn = (props) => {
    const classes = useStyles();

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign In</h2>}/>
            <SignInReduxForm onSubmit={onSubmit} className={classes.form}/>
        </div>
    );
};

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(SignIn);