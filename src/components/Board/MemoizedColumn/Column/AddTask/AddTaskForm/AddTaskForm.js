import React from "react";
import {Field} from "redux-form";
import {Button} from "@material-ui/core";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {reduxForm} from "redux-form/es/index";
import PropTypes from 'prop-types';
import {required} from "../../../../../../utils/validators/validators";

const AddTaskForm = ({handleSubmit, deactivateEditMode, classes}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Field name={"taskName"} component={"input"} autoFocus={true} validate={[required]} onBlur={deactivateEditMode} className={classes.input}/>
            <div className={classes.buttonGroup}>
                <Button type={"submit"} color={"secondary"} variant={"contained"} >Add</Button>
                <Button color={"secondary"} variant={"contained"} onClick={deactivateEditMode} ><CloseIcon /></Button>
            </div>
        </form>
    );
};

AddTaskForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    deactivateEditMode: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default reduxForm({form: "addTask"})(AddTaskForm);