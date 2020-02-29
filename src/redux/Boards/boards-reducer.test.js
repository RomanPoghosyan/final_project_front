import {boardsReducer} from "./boards-reducer";
import React from "react";
import {addBoardSuccess, setBoards} from "./actions";

describe('boards reducer', () => {
    test('if state is undefined return initial state', () => {
        let action = {};
        const initialState = [];
        let newState = boardsReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('after SET_BOARDS boards has to be added', () => {
        let mockData = [
            {id: 1, name: 'user1'}
        ];
        let action = setBoards([{id: 1, name: 'user1'}]);
        const initialState = [];
        let newState = boardsReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('after ADD_BOARD newState has to contain new board', () => {
        let initialState = [
            {id: 1, name: 'user1'}
        ];
        let mockDataResult = [
            {id: 1, name: 'user1'},
            {id: 2, name: 'user2'}
        ];
        let action = addBoardSuccess({id: 2, name: 'user2'});
        let newState = boardsReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult);
    });
});