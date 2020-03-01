import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import {renderSelectField} from "../../../../common/FormControlls/FormControlls";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
   formControl: {
       display: "grid",
       gridTemplateRows: "40px 40px",
       gridGap: "15px"
   },
    textField: {
       height: "40px"
    }
});

const AssignTaskForm = ({handleSubmit, users}) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} >
            <FormControl className={classes.formControl}>
                <Field
                    name="assigneeId"
                    component={renderSelectField}
                    label="Assignee"
                    className={classes.textField}
                >
                    <option value="" />
                    {users.map(u => <option key={u.id} value={u.id}>{`${u.first_name} ${u.last_name}`}</option>)}
                </Field>
                <Button type={"submit"} color={"secondary"} variant={"contained"}>Add</Button>
            </FormControl>
        </form>
    )
};

AssignTaskForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: "assignTask",
})(AssignTaskForm);