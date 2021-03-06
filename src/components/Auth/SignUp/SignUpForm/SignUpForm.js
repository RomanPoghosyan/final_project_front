import {
    emailChecker,
    maxLengthCreator,
    onlyCharacters, requiredEmail,
    requiredFirstName, requiredLastName, requiredPassword, requiredUsername
} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../common/FormControlls/FormControlls";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import React, {memo} from "react";
import FormHelperText from "@material-ui/core/FormHelperText";


let maxLength15 = maxLengthCreator(15);

const SignUpForm = ({className, handleSubmit, error, submitSucceeded}) => {
    return (
        <form onSubmit={handleSubmit} className={className}>
            <Field label={"First name"} name={"first_name"} component={renderTextField}
                   validate={[requiredFirstName, onlyCharacters, maxLength15]}/>
            <Field label={"Last name"} name={"last_name"} component={renderTextField}
                   validate={[requiredLastName, onlyCharacters,maxLength15]}/>
            <Field label={"Username"} name={"username"} component={renderTextField}
                   validate={[requiredUsername]}/>
            <Field label={"Email"} name={"email"} component={renderTextField}
                   validate={[requiredEmail, emailChecker]}/>
            <Field label={"Password"} id="standard-password-input" name={"password"} component={renderTextField}
                   validate={[requiredPassword, maxLength15]}/>
            <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
            <Button type={"submit"} variant={"contained"} disabled={submitSucceeded}>Sign Up</Button>
        </form>
    );
};

SignUpForm.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    submitSucceeded: PropTypes.bool.isRequired,
};


export default reduxForm({form: "signup"})(memo(SignUpForm));
