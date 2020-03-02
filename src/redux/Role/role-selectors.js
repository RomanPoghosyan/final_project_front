import {createSelector} from "reselect";
import customRolesTableCell from "../../components/Roles/TableCells/customRolesTableCell";
import initialRolesTableCell from "../../components/Roles/TableCells/initialRolesTableCell";
import {getBoardUsersSelect, getCurrentUser} from "../User/user-selectors";

export const getPrivilegesSelect = state => state.home.role.privileges;

export const getMappedInitialPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
    return [{id: 0, name: "Role"}, ...privileges].map(p => ({
        ...p, sortable: true,
        cell: initialRolesTableCell(p)
    }));
});

export const getMappedCustomPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
    return [{id: 0, name: "Role"}, ...privileges].map(p => ({
        ...p, sortable: true,
        cell: customRolesTableCell(p)
    }));
});

export const getRolesSelect = state => state.home.role.roles;

export const getInitialRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "INITIAL"));

export const getCustomRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "CUSTOM"));

export const getPrivilegesLengthSelect = createSelector(getPrivilegesSelect, privileges => privileges.length);



export const getUserPrivilegesSelect = createSelector(getCurrentUser, getBoardUsersSelect, getRolesSelect, (user, boardUsers, roles) => {
    if(!user || boardUsers.length < 1 || roles.length < 1) return [];
    const userInfoInBoard = boardUsers.find(u => u.id === user.id);
    const roleId = userInfoInBoard.roleId;
    const role = roles.find(r => r.id === roleId);
    return role.privilegesIds
});
