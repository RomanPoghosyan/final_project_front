import {authReducer, getAuthUserData, setAuthUserData} from "./auth-reducer";
import React from "react";
import ReactDOM from 'react-dom'


test('initial state', () => {
    let action = {};
    const initialState = {
        userId: null,
        email: null,
        username: null,
        isAuth: false,
    };
    let newState = authReducer(initialState, action);
    expect(newState).toMatchObject(initialState);
});

test('new state', () => {
    let mockData = {
        userId: 7,
        email: 'user@user.net',
        username: 'user',
        isAuth: true,
    };
    let action = setAuthUserData(7, 'user@user.net', 'user', true);
    const initialState = {
        userId: null,
        email: null,
        username: null,
        isAuth: false,
    };
    let newState = authReducer(initialState, action);
    expect(newState).toMatchObject(mockData);
});