import React, {useCallback, useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../common/FormControlls/FormControlls";
import {Button} from "@material-ui/core";
import {
    emailChecker,
    maxLengthCreator,
    onlyCharacters,
    phoneNumberChecker,
    requiredEmail,
    requiredFirstName,
    requiredLastName,
    requiredUsername
} from "../../../utils/validators/validators";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from 'prop-types';
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";


let maxLength15 = maxLengthCreator(15);

const AccountSettingsForm = ({classes, handleSubmit, error, initialize, user, submitting}) => {
    const memoizedCallback  = useCallback((user) => initialize(user), [initialize]);

    useEffect(() => {
        memoizedCallback({...user});
    }, [memoizedCallback, user]);

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl className={classes.formControl}>
                <FormGroup className={classes.formGroup}>
                    <Field label={"First name:"} name={"first_name"} component={renderTextField}
                           validate={[requiredFirstName, onlyCharacters, maxLength15]}/>
                    <Field label={"Last name:"} name={"last_name"} component={renderTextField}
                           validate={[requiredLastName, onlyCharacters, maxLength15]}/>
                    <Field label={"Username:"} name={"username"} component={renderTextField}
                           validate={[requiredUsername]}/>
                    <Field label={"Phone number:"} name={"phone_number"} component={renderTextField}
                           validate={[phoneNumberChecker]}/>
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                    <Field label={"Location:"} name={"location"} component={renderTextField} validate={[]}/>
                    <Field label={"Email:"} name={"email"} component={renderTextField}
                           validate={[requiredEmail, emailChecker]}/>
                    <Field input={{disabled: true, defaultValue: user.created_at}} label={"Created at:"}
                           name={"created_at"}
                           component={renderTextField} validate={[]}/>
                    <Field input={{disabled: true, defaultValue: user.updated_at}} label={"Updated at:"}
                           name={"updated_at"}
                           component={renderTextField} validate={[]}/>
                </FormGroup>
            </FormControl>
            <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
            <Button type={"submit"} variant={"contained"} color={"secondary"} disabled={submitting}
                    className={classes.button}>Change information</Button>
        </form>
    )
};

AccountSettingsForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    initialize: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default reduxForm({form: "settings"})(AccountSettingsForm);