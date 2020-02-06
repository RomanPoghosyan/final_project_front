import {authAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    username: null,
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

export const setAuthUserData = (userId, email, username, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, username, isAuth }});

export const getAuthUserData = () => (dispatch) => {
    let token = window.localStorage.getItem('token');
    console.log(token);
    if(token) {
        authAPI.me(token)
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, username} = data.body;
                    dispatch(setAuthUserData(id, email, username, true));
                }
            });
    }
};

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password)
        .then(data => {
            console.log(data);
            if(data.resultCode === 0){
                window.localStorage.setItem('token', data.body.token);
                    dispatch(getAuthUserData());
            }
        });
};

