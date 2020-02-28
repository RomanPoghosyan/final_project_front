import {maxLengthCreator, requiredPassword, requiredUsername} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../common/FormControlls/FormControlls";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

let maxLength15 = maxLengthCreator(15);

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.className}>
            <Field label={"Login"} id="standard-basic" name={"login"} component={renderTextField}
                   validate={requiredUsername} />
            <Field label={"Password"} id="standard-password" name={"password"}
                   component={renderTextField} validate={[requiredPassword, maxLength15]} />
            <FormHelperText error={Boolean(props.error)}>{props.error}</FormHelperText>
            <Button type={"submit"} variant={"contained"} disabled={props.submitSucceeded}>Sign In</Button>
        </form>
    );
};

SignInForm.propTypes = {
    className: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitSucceeded: PropTypes.bool.isRequired,
};

export default reduxForm({form: "login"})(SignInForm);
