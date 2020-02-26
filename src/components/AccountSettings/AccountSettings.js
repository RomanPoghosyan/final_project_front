import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AccountSettingsForm from "./AccountSettingsForm/AccountSettingsForm";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../redux/User/actions";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const useStyles = makeStyles(theme => ({
    wrapper: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
    form: {
        display: 'grid',
        margin: 'auto',
        width: '55%',
        minWidth: '300px',
        maxWidth: "550px",
    },
    formControl: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: '15px'
    },
    button: {
        width: '50%',
        justifySelf: 'center',
        minWidth: '200px'
    },
    formGroup: {
        '& > *': {
            margin: '15px 0'
        }
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
        <div className={classes.wrapper}>
            <AccountSettingsForm onSubmit={onSubmit} user={user} classes={classes}/>
        </div>
    )
};


export default  withAuthRedirect(false)(AccountSettings);