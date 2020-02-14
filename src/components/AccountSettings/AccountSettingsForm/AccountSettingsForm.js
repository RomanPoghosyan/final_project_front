import React, {useEffect} from "react";
import {reduxForm, Field} from "redux-form";
import {renderTextField} from "../../common/FormControlls/FormControlls";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../../redux/user-reducer";
import {Button} from "@material-ui/core";
import {
    emailChecker,
    maxLengthCreator,
    onlyCharacters,
    phoneNumberChecker,
    required
} from "../../../utils/validators/validators";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from 'prop-types';

let maxLength15 = maxLengthCreator(15);

const AccountSettingsForm = ({className, handleSubmit, error, initialize}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    useEffect(() => {
        dispatch(getUserData());
    }, []);
    useEffect(() => {
        initialize({...user});
    }, [user]);

    //TODO to setting
    if ( !user.username ) {
        return null;
    }
    return (
        <form onSubmit={handleSubmit} className={className}>
            <Field label={"First name:"} name={"first_name"} component={renderTextField} validate={[required, onlyCharacters, maxLength15]}/>
            <Field label={"Last name:"} name={"last_name"} component={renderTextField} validate={[required, onlyCharacters, maxLength15]}/>
            <Field label={"Username:"} name={"username"} component={renderTextField} validate={[required]}/>
            <Field label={"Phone number:"} name={"phone_number"} component={renderTextField} validate={[phoneNumberChecker]}/>
            <Field label={"Location:"} name={"location"} component={renderTextField} validate={[]}/>
            <Field label={"Email:"} name={"email"} component={renderTextField} validate={[required, emailChecker]}/>
            <Field input={{disabled: true, defaultValue: user.created_at}} label={"Created at:"} name={"created_at"} component={renderTextField} validate={[]}/>
            <Field input={{disabled: true, defaultValue: user.updated_at}} label={"Updated at:"} name={"changed_at"} component={renderTextField} validate={[]}/>
            <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
            <Button type={"submit"} variant={"contained"} color={"secondary"}>Change information</Button>
        </form>
    )
};
//handleSubmit, error, initialize
AccountSettingsForm.propTypes = {
    className: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    initialize: PropTypes.func.isRequired
};

export default reduxForm({form: "settings"})(AccountSettingsForm);