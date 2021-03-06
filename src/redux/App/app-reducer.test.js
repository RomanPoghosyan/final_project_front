import React from "react";
import appReducer from "./app-reducer";
import {initializedSuccess} from "./actions";


describe('app-reducer tests', () => {
    let initialState = {
        initialized: false
    };

    test('initialized is true', () => {
        let action = initializedSuccess();
        let newState = appReducer(initialState, action);
        expect(newState.initialized).toBe(true);
    });

    test('initialized is false', () => {
        let action = {};
        let newState = appReducer(initialState, action);
        expect(newState.initialized).toBe(false);
    });
});