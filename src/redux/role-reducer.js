import {rolesAPI} from "../API/api";


const SET_ROLES = "SET_ROLES";
const SET_PRIVILEGES = "SET_PRIVILEGES";


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


