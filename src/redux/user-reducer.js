import {authAPI, userAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {setNotify} from "./notify-reducer";

const SET_USER_FULL_DATA = "SET_USER_FULL_DATA";

const initialState = {
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
                ...action.payload
            };

        default:
            return state;
    }
};

/**
 *
 * getUserData ( should call to the server for getting user object data and dispatch setUserData action )
 *
 * @returns {function(...[*]=)} (from thunk)
 */

export const getUserData = () => dispatch => {
    let token = window.localStorage.getItem('token');
    if (token)
        return userAPI.getUser(token)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    const {id, email, username, first_name, last_name, location, created_at, updated_at, phone_number} = data.body;
                    dispatch(setUserData(id, email, username, first_name, last_name,
                        location, created_at, updated_at, phone_number, true));
                }
        });
};

/**
 *
 * setUserData ( should return action with type SET_USER_FULL_DATA when user wants to update account )
 *
 * @param {number} id
 * @param {string} email
 * @param {string} username
 * @param {string} first_name
 * @param {string} last_name
 * @param {string} location
 * @param {string} created_at
 * @param {string} updated_at
 * @param {string} phone_number
 * @param {Boolean || null} isAuth
 *
 * @returns {{payload: {isAuth: *, updated_at: *, last_name: *, created_at: *, location: *, phone_number: *, id: *, first_name: *, email: *, username: *}, type: string}}
 */

export function setUserData(id, email, username, first_name, last_name, location, created_at, updated_at, phone_number, isAuth) {
    return {
        type: SET_USER_FULL_DATA,
        payload: {id, email, username, first_name, last_name, location, created_at, updated_at, phone_number, isAuth}
    }
}

/**
 *
 * updateUser ( should call to the server for updating user object data and dispatch setUserData action )
 *
 * @param {Object} user
 * @returns {function(...[*]=)} (from thunk)
 */

export const updateUser = (user) => dispatch => {
    userAPI.updateUser(user)
        .then(({data}) => {
            if (data.resultCode === 0) {
                const {id, email, username, first_name, last_name, location, created_at, updated_at, phone_number} = data.body;
                dispatch(setUserData(id, email, username, first_name, last_name, location, created_at, updated_at, phone_number, true));
                dispatch(setNotify({open: true, type: 'success', content: 'Account settings are changed'}));
            }
        }).catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("settings", {_error: message}));
            dispatch(setNotify({open: true, type: 'error', content: 'Account settings are not changed'}));
        });
};

/**
 *
 * login ( should call to the server for logging and dispatch setUserData action )
 *
 * @param {string} email
 * @param {string} password
 * @returns {function(...[*]=)} (from thunk)
 */
export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password)
        .then(({data}) => {
            if (data.resultCode === 0) {
                window.localStorage.setItem('token', data.body.token);
                dispatch(getUserData());
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("login", {_error: message}));
        });
};


/**
 *
 * signup ( should call to the server for sign up and dispatch setUserData action )
 *
 * @param formData
 * @returns {function(...[*]=)}
 */
export const signup = formData => dispatch => {
    authAPI.signup(formData)
        .then(({data}) => {
            if (data.resultCode === 0) {
                localStorage.setItem('token', data.body.token);
                dispatch(getUserData());
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("signup", {_error: message}));
        });
};

/**
 *
 * logout ( should call to the server for logout and dispatch setUserData action )
 *
 * @returns {{payload: {isAuth: *, updated_at: *, last_name: *, created_at: *, location: *, phone_number: *, id: *, first_name: *, email: *, username: *}, type: string}}
 */
export const logout = () => {
    window.localStorage.removeItem('token');
    authAPI.logout();
    return setUserData(null, null, null, null, null, null, null, null, false);
};

export default userReducer;