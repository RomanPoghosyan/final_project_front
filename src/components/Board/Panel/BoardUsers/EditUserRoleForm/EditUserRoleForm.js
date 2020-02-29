import React, {useCallback, useEffect} from "react";
import {reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import RoleSelect from "../../AddUser/AddUserForm/RoleSelect/RoleSelect";

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


const EditUserRoleForm = ({handleClose, handleSubmit, submitSucceeded, initialize, currentRoleId}) => {
    const classes = useStyles();
    const memoizedCallback  = useCallback((roleId) => initialize({roleId}), [initialize]);

    useEffect(() => {
        memoizedCallback(`${currentRoleId}`);
    }, [memoizedCallback, currentRoleId]);

    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <div className={classes.roleList}>
                <RoleSelect />
            </div>
            <div className={classes.buttonGroup}>
                <Button type={"submit"} color={"secondary"} variant={"contained"}
                        disabled={submitSucceeded}>Save</Button>
                <Button onClick={handleClose} type={"button"} color={"secondary"}
                        disabled={submitSucceeded} variant={"contained"}>Cancel</Button>
            </div>
        </form>
    )
};

EditUserRoleForm.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired
};

export default reduxForm({
    form: "editUserRole",
})(EditUserRoleForm);