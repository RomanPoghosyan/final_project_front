import {SET_SEARCHED_USERS, SET_USER_FULL_DATA, SET_FB_TOKEN} from "./action-types";
import {CHANGE_USER_ROLE_SUCCESS, SET_BOARD_USERS, SET_SEARCHED_USERS, SET_USER_FULL_DATA} from "./action-types";


const initialState = {
    searchedUsers: [
        // {id: 12, username: "black", first_name: "John"},
        // {id: 13, username: "white", first_name: "Kaia"},
        // {id: 14, username: "yellow", first_name: "Olivia"},
    ],
    boardUsers: [],
    currentUser: {
        id: null,
        email: null,
        username: null,
        first_name: null,
        last_name: null,
        location: null,
        created_at: null,
        updated_at: null,
        phone_number: null,
        fbToken: null,
        isAuth: false,
    }
};

/**
 *
 * userReducer ( should return new state for userReducer )
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {{boardUsers: ...*[], currentUser: {}, searchedUsers: ...*[]}}
 */

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_FULL_DATA:
            return {
                ...state,
                currentUser: {...action.payload}
            };
        case SET_FB_TOKEN:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    fbToken: action.payload
                }
            };
        case SET_SEARCHED_USERS:
            return {
                ...state,
                searchedUsers: [
                    ...action.payload,
                ]
            };
        case SET_BOARD_USERS:
            return {
                ...state,
                boardUsers: [...action.payload]
            };
        case CHANGE_USER_ROLE_SUCCESS:
            return {
                ...state,
                boardUsers: state.boardUsers.map(u => {
                    console.log(u.id);
                    console.log(action.payload.userId);
                    if (u.id === +action.payload.userId) {
                        return {
                            ...u,
                            roleId: action.payload.roleId,
                        }
                    }
                    return u;
                })
            };
        default:
            return state;
    }
};


export default userReducer;