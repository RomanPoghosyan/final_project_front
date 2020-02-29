import {SET_FB_TOKEN, SET_SEARCHED_USERS, SET_USER_FULL_DATA, USER_LOGOUT} from "./action-types";
import {authAPI, userAPI} from "../../API/api";
import {initialize, initializedSuccess} from "../App/actions";
import {setNotify} from "../Notify/notify-reducer";
import {stopSubmit} from "redux-form";
import {messaging} from "../../init-fcm";
import {getNotifications} from "../Notification/actions";

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
 * getUserData ( should call to the server for getting user object data and dispatch setUserData action )
 *
 * @returns {function(...[*]=)} (from thunk)
 */

export const getUserData = () => dispatch => {
    let token = window.localStorage.getItem('token');
    if (token) {
        return userAPI.getUser(token)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    const {id, email, username, first_name, last_name, location, created_at, updated_at, phone_number} = data.body;
                    dispatch(setUserData(id, email, username, first_name, last_name, location, created_at, updated_at, phone_number, true));
                }
            })
            .catch(() => {
                logout();
            });
    }
};


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
        })
        .catch(({response: {data}}) => {
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
                dispatch(initialize());
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
                dispatch(initialize());
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("signup", {_error: message}));
        });
};


export const logoutSuccess = () => ({type: USER_LOGOUT});

/**
 *
 * logout ( should call to the server for logout and dispatch setUserData action )
 *
 * @returns {{type: *}}
 */
export const logout = () => dispatch => {
    window.localStorage.removeItem('token');
    authAPI.logout();
    dispatch(logoutSuccess());
    dispatch(initializedSuccess());
    messaging.deleteToken('').then(() => setFbToken(''));
};

export const setSearchedUsers = (searchedUsers) => ({type: SET_SEARCHED_USERS, payload: searchedUsers});

export const search = username => async (dispatch, getState) => {
    if (username.length > 3) {
        userAPI.search(username, getState().home.currentBoard.id)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(setSearchedUsers(data.body));
                }
            })
            .catch(({response: {data}}) => {
                // let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            });
    } else {
        dispatch(setSearchedUsers([]));
    }
};

export const setFbToken = token => {
    return {type: SET_FB_TOKEN, payload: token};
};


export const getCurrentFbToken = () => dispatch => {
    messaging.getToken()
        .then ( token => {
           userAPI.setFbToken(token)
               .then ( token => {
                   dispatch(setFbToken(token))
               })
        }).catch(err => console.log('There are no token',err));
};

export const requestPermission = () => dispatch => {
    messaging.requestPermission()
        .then(async function() {
            dispatch(getCurrentFbToken());
        })
        .catch(function(err) {
            console.log("Unable to get permission to notify. ", err);
        });
    navigator.serviceWorker.addEventListener("message", ((message) => {
        dispatch(getNotifications());
        dispatch(setNotify({open: true, content:  "You have new notification", type: "warning"}));
    }));
    messaging.onMessage((payload) => console.log('Message received. ', payload));
};