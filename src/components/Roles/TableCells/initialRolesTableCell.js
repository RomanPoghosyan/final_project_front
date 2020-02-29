import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const initialRolesTableCell = privilege => row => {
    return privilege.name === "Role" ?
        <div>{row.name}</div> :
        <div><Checkbox disabled checked={row.privilegesIds.includes(privilege.id)}/></div>
};

export default initialRolesTableCell;