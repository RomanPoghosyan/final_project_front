import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBoardRoles, getPrivileges} from "../../redux/Role/actions";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import InitialRolesTable from "./InitialRolesTable/InitialRolesTable";
import CustomRolesTable from "./CustomRolesTable/CustomRolesTable";
import AddRole from "./AddRole/AddRole";
import {getPrivilegesLengthSelect} from "../../redux/Role/role-selectors";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Roles = ({match}) => {
    const boardId = match.params.boardId;
    const dispatch = useDispatch();

    const privilegesLength = useSelector(getPrivilegesLengthSelect);

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
            <AddRole boardId={boardId} />
        </div>
    )
};

export default compose(
    withRouter,
    withAuthRedirect(false)
)(Roles);