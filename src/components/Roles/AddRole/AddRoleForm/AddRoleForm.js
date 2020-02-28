import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../common/FormControlls/FormControlls";
import {maxLengthCreator, requiredFieldCreator} from "../../../../utils/validators/validators";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Button} from "@material-ui/core";
import React, {memo} from "react";
import {makeStyles} from "@material-ui/core/styles";
import MemoizedCheckboxes from "./MemoizedCheckboxes/MemoizedCheckboxes";


const useStyles = makeStyles(theme => ({
    fields: {
        paddingLeft: 48,
        display: "flex",
        flexFlow: "no wrap",
        "& > *": {
            flex: "1 1 0px",
            padding: "0 16px",
            margin: 0,
            boxSizing: "border-box",
        }
    },
    submitButton: {
        width: "100%",
        marginTop: 20
    }
}));

const maxLength15 = maxLengthCreator(15);
const requiredRoleName = requiredFieldCreator("Role name");

const AddRoleForm = ({handleSubmit, error, privileges}) => {
    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.fields}>
                <span>
                    <Field label={"Role name"} name={"role_name"} component={renderTextField}
                           validate={[requiredRoleName, maxLength15]}/>
                </span>
                {privileges.length > 0 && <MemoizedCheckboxes privileges={privileges}/>}
            </div>
            <FormHelperText error={!!error}>{error}</FormHelperText>
            <Button className={classes.submitButton} type={"submit"} variant={"contained"}>Add Role</Button>
        </form>
    );
};


export default reduxForm({form: "addRole"})(memo(AddRoleForm));