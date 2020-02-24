import React from "react";
import {radioButton} from "../../../../../common/FormControlls/FormControlls";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {Field} from "redux-form";
import FormLabel from "@material-ui/core/FormLabel";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const RoleSelect = ({roles, boardId}) => {
    return (
        <>
            <FormLabel component="legend">User Role</FormLabel>
            <Field name="roleId" component={radioButton}>
                    {roles.length > 0 && roles.map(r => <FormControlLabel key={r.id} value={`${r.id}`} control={<Radio value={`${r.id}`} />} label={r.name}/>)}
            </Field>
            <p>You can create your own roles and get more info <Link to={`/roles/${boardId}`}>here</Link></p>
        </>
    );
};


const mapStateToProps = (state) => ({
    boardId: state.home.currentBoard.id,
    roles: state.home.role.roles,
});

export default connect(mapStateToProps, null)(RoleSelect);