import {SET_SEARCHED_USERS, SET_USER_FULL_DATA} from "./action-types";


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
        isAuth: false,
    }
};

/**
 *
 * userReducer ( should return new state for userReducer )
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {{isAuth: boolean, phoneNumber: null || string, updated_at: null || string,
 * last_name: null || string, created_at: null || string, location: null || string,
 * first_name: null || string, email: null || string, username: null || string }}
 */

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_FULL_DATA:
            return {
                ...state,
                currentUser: {...action.payload}
            };
        case SET_SEARCHED_USERS:
            return {
                ...state,
                searchedUsers: [
                    ...action.payload,
                ]
            };
        default:
            return state;
    }
};



export default userReducer;