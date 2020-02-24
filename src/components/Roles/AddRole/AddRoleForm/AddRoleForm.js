import {Field, reduxForm} from "redux-form";
import {renderCheckbox, renderTextField} from "../../../common/FormControlls/FormControlls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Button} from "@material-ui/core";
import React, {memo} from "react";
import {makeStyles} from "@material-ui/core/styles";


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

let maxLength15 = maxLengthCreator(15);

const AddRoleForm = ({handleSubmit, error, privileges}) => {
    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.fields}>
                <span>
                    <Field label={"Role name"} name={"role_name"} component={renderTextField}
                           validate={[required, maxLength15]}/>
                </span>

                {privileges.length > 0 && privileges.map(p => (
                    <span key={p.id}>
                        <Field normalize={v => v ? p.id : 0} name={`${p.name}`} component={renderCheckbox}/>
                    </span>
                ))}
            </div>
            <FormHelperText error={!!error}>{error}</FormHelperText>
            <Button className={classes.submitButton} type={"submit"} variant={"contained"}>Add Role</Button>
        </form>
    );
};


export default reduxForm({form: "addRole"})(memo(AddRoleForm));