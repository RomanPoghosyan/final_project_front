import {ADD_ROLE_SUCCESS, SET_PRIVILEGES, SET_ROLES} from "./action-types";


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
            };
        default:
            return state;
    }
};
