import React from "react";
import {useSelector} from "react-redux";
import {getUserPrivilegesSelect} from "../redux/Role/role-selectors";

const withPrivilege = privilegeId => Component => props => {
    const privilegesIds = useSelector(getUserPrivilegesSelect);
    // const privilegesIds = [4]
    if(privilegesIds.includes(privilegeId)) return <Component {...props} />;
    return null;

};

export default withPrivilege;