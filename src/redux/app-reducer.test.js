import React from "react";
import ReactDOM from 'react-dom'
import appReducer, {initializedSuccess} from "./app-reducer";
import {render} from "@testing-library/react";

test('initialized is true', () => {
    let action = initializedSuccess();
    let initialState = {
        initialized: false
    };
    let newState = appReducer(initialState, action);
    expect(newState.initialized).toBe(true);
});

test('initialized is false', () => {
    let action = {};
    let initialState = {
        initialized: false
    };
    let newState = appReducer(initialState, action);
    expect(newState.initialized).toBe(false);
});