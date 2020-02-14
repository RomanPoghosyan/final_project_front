import {userAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_FULL_DATA = "SET_USER_FULL_DATA";

const initialState = {
    id: null,
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null,
    phoneNumber: null,
};

export const userReducer = ( state = initialState, action ) => {
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
    userAPI.getUser().then ( ({data}) => {
       if ( data.resultCode === 0 ) {
           const user = {};
           for ( let key in data.body ) {
               if (!Array.isArray(data.body[key]))
                   user[key] = data.body[key];
           }
           dispatch(setUserData({...user}));
       }
    });
};

const setUserData = user => {
  return {
    type: SET_USER_FULL_DATA,
    payload: {...user}
  }
};

export const updateUser = (user) => dispatch => {
    userAPI.updateUser(user).then ( ({data}) => {
        if (data.resultCode === 0) {
            dispatch(setUserData(user));
            console.log(user);
        }
    }).catch(({response: {data}}) => {
        let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
        dispatch(stopSubmit("settings", {_error: message}));
    });
};


export default userReducer;