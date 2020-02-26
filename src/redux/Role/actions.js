import {
    ADD_PRIVILEGE_TO_ROLE,
    ADD_ROLE_SUCCESS,
    REMOVE_PRIVILEGE_FROM_ROLE,
    SET_PRIVILEGES,
    SET_ROLES
} from "./action-types";
import {rolesAPI} from "../../API/api";
import {stopSubmit} from "redux-form";
import arraysEqual from "../../utils/helpers/arraysEqual";
import {setNotify} from "../Notify/notify-reducer";

export const setBoardRoles = roles => ({type: SET_ROLES, payload: roles});

export const getBoardRoles = boardId => dispatch => {
    rolesAPI.getRoles(boardId)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setBoardRoles(data.body));
            }
        })
};

export const setPrivileges = roles => ({type: SET_PRIVILEGES, payload: roles});

export const getPrivileges = () => dispatch => {
    rolesAPI.getPrivileges()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setPrivileges(data.body));
            }
        })
};

export const addRoleSuccess = (role) => ({type: ADD_ROLE_SUCCESS, payload: role})

export const addRole = (boardId, formData) => (dispatch, getState) => {
    const formDataValues = Object.values(formData);

    const roles = getState().home.role.roles;
    const privilegesIds = formDataValues.filter(v => typeof v === "number" && v !== 0);
    /* Check if at least one privilege is selected */
    if (privilegesIds.length < 1) {
        return dispatch(stopSubmit("addRole", {_error: "Please select at least one privilege!"}));
    }
    /* Check if current role already exists */
    if(isRoleExists(roles, privilegesIds)){
        return dispatch(stopSubmit("addRole", {_error: "Role with current privileges already exists!"}));
    }

    /* Adding new role */
    const role = {
        name: formData.role_name,
        projectId: boardId,
        privilegesIds
    };
    rolesAPI.addRole(role)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addRoleSuccess(data.body));
                dispatch(setNotify({
                    open: true, type: 'success', content: `Role added successfully!`
                }));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
            // dispatch(stopSubmit("addTask", {_error: message}));
        });
};

export const addPrivilegeToRole = (roleId, privilegesIds) => ({type: ADD_PRIVILEGE_TO_ROLE, payload: {roleId, privilegesIds}});

export const removePrivilegeFromRole = (roleId, privilegesIds) => ({type: REMOVE_PRIVILEGE_FROM_ROLE, payload: {roleId, privilegesIds}});

export const editRolePrivilege = (role, privilegeId, isAddition) => (dispatch, getState) => {
    let privilegesIds;
    const roles = getState().home.role.roles;
    if(!isAddition) {
        if (role.privilegesIds.length < 2) {
            return dispatch(setNotify({open: true, type: 'error', content: `Role must have at least one privilege!`}));
        }
        privilegesIds = role.privilegesIds.filter(id => id !== privilegeId);
    } else {
        privilegesIds = [...role.privilegesIds, privilegeId];
    }

    /* Check if current role already exists */
    if(isRoleExists(roles, privilegesIds)){
        return dispatch(setNotify({open: true, type: 'error', content: `Role with current privileges already exists!`}));
    }

    /* Editing Role */
    const data = { roleId: role.id, privilegeId, isAddition };
    rolesAPI.editRolePrivilege(data)
        .then(({data}) => {
            if (data.resultCode === 0) {
                if(isAddition) {dispatch(addPrivilegeToRole(role.id, privilegesIds))}
                else {dispatch(removePrivilegeFromRole(role.id, privilegesIds))}
                dispatch(setNotify({
                    open: true, type: 'success', content: `Role updated successfully!`
                }));
            }
        })
        .catch(({response: {data}}) => {
            // dispatch(stopSubmit("addTask", {_error: message}));
        });
};

const isRoleExists = (roles, privilegesIds) => {
    return roles.some(r => arraysEqual(r.privilegesIds, privilegesIds));
};

