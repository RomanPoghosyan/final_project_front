import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AccountSettingsForm from "./AccountSettingsForm/AccountSettingsForm";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/user-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const useStyles = makeStyles(() => ({
    form: {
        display: 'grid',
        margin: 'auto',
        width: '55%',
        minWidth: '300px',
        maxWidth: "550px",
    },
    formGroup: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: '15px'
    },
    formGroupChild: {
        margin: '10px 0'
    },
    button: {
        width: '50%',
        justifySelf: 'center',
        minWidth: '200px'
    }
}));


const AccountSettings = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {id, isAuth, ...user} = useSelector(state => state.user.currentUser);

    const onSubmit = formData => {
        dispatch(updateUser(formData));
    };

    if(!isAuth) return <p>Loading...</p>;
    return (
        <AccountSettingsForm onSubmit={onSubmit} user={user} classes={classes}/>
    )
};


export default  withAuthRedirect(false)(AccountSettings);