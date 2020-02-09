import React from "react";
import ReactDOM from 'react-dom'
import appReducer, {initializedSuccess} from "./app-reducer";
import {render} from "@testing-library/react";
import App from "../App";

test('INITIALIZED_SUCCESS is true', () => {
    let action = initializedSuccess();
    let initialState = {
        initialized: false
    };
    let newState = appReducer(initialState, action);
    expect(newState.initialized).toBeTruthy()
});