import React from "react";
import {reduxForm} from "redux-form";
import {asyncValidate} from "../../../../../utils/validators/validators";
import Button from "@material-ui/core/Button";
import UserSelect from "./UserSelect/UserSelect";
import RoleSelect from "./RoleSelect/RoleSelect";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridRowGap: 15,
        width: 300,
        padding: 10
    },
    buttonGroup: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: 3
    }
}));


const AddUserForm = ({handleClose, handleSubmit, submitSucceeded}) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <div className={classes.userList}>
                <UserSelect />
            </div>
            <div className={classes.roleList}>
                <RoleSelect />
            </div>
            <div className={classes.buttonGroup}>
                <Button type={"submit"} color={"secondary"} variant={"contained"}
                disabled={submitSucceeded}>Add</Button>
                <Button onClick={handleClose} type={"button"} color={"secondary"}
                 disabled={submitSucceeded} variant={"contained"}>Cancel</Button>
            </div>
        </form>
    )
};

AddUserForm.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired
};

export default reduxForm({
    form: "addUser",
    asyncValidate,
    asyncChangeFields: ['username']
})(AddUserForm);