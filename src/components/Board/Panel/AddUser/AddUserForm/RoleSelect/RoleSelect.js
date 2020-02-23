import React from "react";
import {radioButton} from "../../../../../common/FormControlls/FormControlls";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {Field} from "redux-form";
import FormLabel from "@material-ui/core/FormLabel";
import {connect} from "react-redux";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import {RadioGroup} from "redux-form-material-ui";

const RoleSelect = ({roles}) => {
    return (
        <>
            <FormLabel component="legend">User Role</FormLabel>
            <Field name="roleId" component={radioButton}>
                    {roles.length > 0 && roles.map(r => <FormControlLabel key={r.id} value={`${r.id}`} control={<Radio value={`${r.id}`} />} label={r.name}/>)}
            </Field>
        </>
    );
};


const mapStateToProps = (state) => ({
    roles: state.home.roles,
});

export default connect(mapStateToProps, null)(RoleSelect);