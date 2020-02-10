import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../../../common/FormControlls/FormControlls";
import {required} from "../../../../../../utils/validators/validators";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const AddBoardForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.className}>
            <DialogContent>
                <Field label={"Project Name"} id="standard-basic" name={"name"} component={renderTextField} margin="dense" variant="outlined" validate={[required]} />
                <FormHelperText error={!!props.error}>{props.error}</FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} type={"button"} color={"secondary"} variant={"contained"}>Cancel</Button>
                <Button type={"submit"} color={"secondary"} variant={"contained"}>Add</Button>
            </DialogActions>
        </form>
    );
};

AddBoardForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    error: PropTypes.string,
};

export default reduxForm({form: "addBoard"})(AddBoardForm);