import {radioButton} from "../../../../../common/FormControlls/FormControlls";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {Field} from "redux-form";
import React from "react";
import FormLabel from "@material-ui/core/FormLabel";

const RoleSelect = () => {
    return (
        <>
            <FormLabel component="legend">User Role</FormLabel>
            <Field name="sex" component={radioButton}>
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            </Field>
        </>
    );
};

export default RoleSelect;