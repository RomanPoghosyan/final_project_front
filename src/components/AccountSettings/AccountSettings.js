import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AccountSettingsForm from "./AccountSettingsForm/AccountSettingsForm";
import {useDispatch} from "react-redux";
import {updateUser} from "../../redux/user-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const useStyles = makeStyles(() => ({
    form: {
        display: 'grid',
        margin: 'auto',
        width: '40%',
        minWidth: '300px',
        maxWidth: "550px",
    }
}));


const AccountSettings = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmit = formData => {
        const {email, username, first_name, last_name, phone_number, location } = formData;
        const user = { email, username, first_name, last_name, phone_number, location};
        dispatch(updateUser(user));
    };

    return (
        <AccountSettingsForm onSubmit={onSubmit} className={classes.form}/>
    )
};


export default  withAuthRedirect(false)(AccountSettings);