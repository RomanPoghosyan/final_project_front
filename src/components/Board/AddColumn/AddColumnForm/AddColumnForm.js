import React from "react";
import {Field} from "redux-form";
import {Button} from "@material-ui/core";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {reduxForm} from "redux-form/es/index";

const AddColumnForm = ({handleSubmit, deactivateEditMode, classes}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"columnName"} component={"input"} autoFocus={true} className={classes.input}/>
            <div className={classes.buttonGroup}>
                <Button type={"submit"} color={"secondary"} variant={"contained"} >Add</Button>
                <Button color={"secondary"} variant={"contained"} onClick={deactivateEditMode} ><CloseIcon /></Button>
            </div>
        </form>
    );
};

export default reduxForm({form: "addColumn"})(AddColumnForm);