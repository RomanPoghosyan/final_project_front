import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null,
    phoneNumber: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserFullData = (userId, email, username, firstName, lastName, createdAt, updatedAt, phoneNumber, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, username, firstName, lastName, createdAt, updatedAt, phoneNumber, isAuth}
});

export const getAuthUserFullData = () => async (dispatch) => {

};

export const setAuthUserData = (userId, email, username, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, username, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let token = window.localStorage.getItem('token');
    if (token) {
        return authAPI.me(token)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    let {id, email, username} = data.body;
                    dispatch(setAuthUserData(id, email, username, true));
                }
            }).catch((e) => {
            });
    }
};

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password)
        .then(({data}) => {
            if (data.resultCode === 0) {
                window.localStorage.setItem('token', data.body.token);
                dispatch(getAuthUserData());
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("login", {_error: message}));
        });
};

export const signup = formData => dispatch => {
    authAPI.signup(formData)
        .then(({data}) => {
            if (data.resultCode === 0) {
                localStorage.setItem('token', data.body.token);
                dispatch(getAuthUserData());
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("signup", {_error: message}));
        });
};


export const logout = () => {
    window.localStorage.removeItem('token');
    authAPI.logout();
    return setAuthUserData(null, null, null, false);
};

