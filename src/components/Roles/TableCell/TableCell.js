import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {useDispatch} from "react-redux";
import {editRolePrivilege} from "../../../redux/Role/actions";

const tableCell = privilege => row => {
    const dispatch = useDispatch();

    return privilege.name === "Role" ?
        <div>{row.name}</div> :
        <div><Checkbox onChange={(e) => dispatch(editRolePrivilege(row, privilege.id, e.target.checked))} checked={row.privilegesIds.includes(privilege.id)}/></div>
};

export default tableCell;