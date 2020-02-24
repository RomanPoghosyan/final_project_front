import {rolesAPI, taskAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import arraysEqual from "../utils/helpers/arraysEqual";
import {addTaskToColumnSuccess} from "./board-reducer";
import {addTaskSuccess} from "./tasks-reducer";


const SET_ROLES = "SET_ROLES";
const SET_PRIVILEGES = "SET_PRIVILEGES";
const ADD_ROLE_SUCCESS = "ADD_ROLE_SUCCESS";


const initialState = {
    privileges: [],
    roles: []
};

export const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLES:
            return {
                ...state,
                roles: [
                    ...action.payload,
                ]
            };
        case SET_PRIVILEGES:
            return {
                ...state,
                privileges: [
                    ...action.payload,
                ]
            };
        case ADD_ROLE_SUCCESS:
            return {
                ...state,
                roles: [
                    ...state.roles,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

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

export const addRole = formData => (dispatch, getState) => {
    const formDataValues = Object.values(formData);
    /* Check if at least one privilege is selected */
    if (formDataValues.length < 2) {
        return dispatch(stopSubmit("addRole", {_error: "Please select at least one privilege!"}));
    }

    const roles = getState().home.role.roles;
    const privilegesIds = formDataValues.filter(v => typeof v === "number" && v !== 0);
    /* Check if current role already exists */
    if(isRoleExists(roles, privilegesIds)){
        return dispatch(stopSubmit("addRole", {_error: "Role with current privileges already exists!"}));
    }

    /* Adding new role */
    const role = {
        name: formData.role_name,
        projectId: getState().home.currentBoard.id,
        privilegesIds
    };
    rolesAPI.addRole(role)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addRoleSuccess(data.body));
            }
        })
        .catch(({response: {data}}) => {
            // dispatch(stopSubmit("addTask", {_error: message}));
        });
};

const isRoleExists = (roles, privilegesIds) => {
    return roles.some(r => arraysEqual(r.privileges, privilegesIds));
};

