import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {requiredMicroTaskName} from "../../../../../utils/validators/validators";
import {renderTextArea} from "../../../../common/FormControlls/FormControlls";

const useStyles = makeStyles(theme => ({
    textarea: {
        width: "100%",
        border: `1px solid ${theme.palette.secondary.main}`
    }
}));

const AddMicroTaskForm = ({handleSubmit}) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} >
            <Field aria-label="minimum height"
                   rowsMin={3}
                   className={classes.textarea}
                   autoFocus={true} name={"microTaskName"} component={renderTextArea}
                   validate={[requiredMicroTaskName]} />

            <Button type={"submit"} color={"secondary"} variant={"contained"}>Add</Button>
        </form>
    )
};

AddMicroTaskForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: "addMicroTask",
})(AddMicroTaskForm);