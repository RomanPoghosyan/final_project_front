import React from "react";
import notifyReducer, {setNotify} from "./notify-reducer";

describe('notify reducer', () => {
    let initialState = {
        open: false,
        type: 'success',
        content: ''
    };

    test('return initial state', () => {
        let action = {};
        let newState = notifyReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('NOTIFY', () => {
        let mockData = {
            open: true,
            type: 'success',
            content: 'notify'
        };
        let action = setNotify({open: true, type: 'success', content: 'notify'});
        let newState = notifyReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });
});