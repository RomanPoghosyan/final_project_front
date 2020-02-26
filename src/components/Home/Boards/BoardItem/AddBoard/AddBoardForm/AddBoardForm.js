import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../../../common/FormControlls/FormControlls";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import {requiredFieldCreator} from "../../../../../../utils/validators/validators";

const requiredProjectName = requiredFieldCreator("Project name");

const AddBoardForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <DialogContent>
                <Field label={"Project Name"} id="standard-basic" name={"name"} component={renderTextField} margin="dense" variant="outlined"
                       validate={[requiredProjectName]} />
                <FormHelperText error={!!props.error}>{props.error}</FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} type={"button"} color={"secondary"}
                disabled={props.submitSucceeded} variant={"contained"}>Cancel</Button>
                <Button type={"submit"} color={"secondary"} disabled={props.submitSucceeded}
                        variant={"contained"}>Add</Button>
            </DialogActions>
        </form>
    );
};

AddBoardForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitSucceeded: PropTypes.bool.isRequired,
};

export default reduxForm({form: "addBoard"})(AddBoardForm);