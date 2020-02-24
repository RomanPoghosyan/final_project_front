import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBoardRoles, getPrivileges} from "../../redux/role-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import InitialRolesTable from "./InitialRolesTable/InitialRolesTable";
import CustomRolesTable from "./CustomRolesTable/CustomRolesTable";
import AddRole from "./AddRole/AddRole";

const Roles = ({match}) => {
    const boardId = match.params.boardId;
    const dispatch = useDispatch();

    const privilegesLength = useSelector(state => state.home.role.privileges.length);

    useEffect(() => {
        if(privilegesLength < 1){
            dispatch(getPrivileges());
        }
        dispatch(getBoardRoles(boardId));
    }, [dispatch, boardId, privilegesLength]);

    return (
        <div>
            <InitialRolesTable />
            <CustomRolesTable />
            <AddRole />
        </div>
    )
};

export default compose(
    withRouter,
)(Roles);