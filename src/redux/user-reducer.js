import {userAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {setNotify} from "./notify-reducer";

const SET_USER_FULL_DATA = "SET_USER_FULL_DATA";

const initialState = {
    email: null,
    username: null,
    first_name: null,
    last_name: null,
    created_at: null,
    updated_at: null,
    phoneNumber: null,
};

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

export const getUserData = () => dispatch => {
    userAPI.getUser().then(({data}) => {
        if (data.resultCode === 0) {
            dispatch(setUserData({...data.body}));
        }
    });
};

export const setUserData = user => {
    return {
        type: SET_USER_FULL_DATA,
        payload: {...user}
    }
};

export const updateUser = (user) => dispatch => {
    userAPI.updateUser(user).then(({data}) => {
        if (data.resultCode === 0) {
            dispatch(setUserData(user));
            dispatch(setNotify({open: true, type: 'success', content: 'Account settings are changed'}));
        }
    }).catch(({response: {data}}) => {
        let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
        dispatch(stopSubmit("settings", {_error: message}));
        dispatch(setNotify({open: true, type: 'error', content: 'Account settings are not changed'}));
    });
};


export default userReducer;