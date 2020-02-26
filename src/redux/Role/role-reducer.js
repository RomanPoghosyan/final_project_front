import {
    ADD_PRIVILEGE_TO_ROLE,
    ADD_ROLE_SUCCESS,
    REMOVE_PRIVILEGE_FROM_ROLE,
    SET_PRIVILEGES,
    SET_ROLES
} from "./action-types";


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
        case ADD_PRIVILEGE_TO_ROLE: {
            const {roleId, privilegesIds} = action.payload;
            return {
                ...state,
                roles: state.roles.map(r => {
                    if (r.id === roleId) {
                        return {...r, privilegesIds: privilegesIds}
                    }
                    return r;
                })
            };
        }
        case REMOVE_PRIVILEGE_FROM_ROLE: {
            const {roleId, privilegesIds} = action.payload;
            return {
                ...state,
                roles: state.roles.map(r => {
                    if (r.id === roleId) {
                        return {...r, privilegesIds: privilegesIds}
                    }
                    return r;
                })
            };
        }
        default:
            return state;
    }
};
