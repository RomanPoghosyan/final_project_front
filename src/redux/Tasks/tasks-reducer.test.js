import React from "react";
import {addTaskSuccess, setTasks, tasksReducer} from "./tasks-reducer";

describe('tasks-reducer test', () => {
    let initialState = {
        tasks: {
            1: {id: 1, title: "Watch 50 videos about React"},
            2: {id: 2, title: "Spring 5 videos"},
        },
        current: null
    };
    test('return initial state', () => {
        let action = {};
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('after SET_TASKS boards has to be added', () => {
        let mockData = {
            1: {id: 1, title: "dfdsfa"},
            2: {id: 2, title: "gfgerger"},
            3: {id: 3, title: "getgtehth"}
        };
        let action = setTasks({
            1: {id: 1, title: "dfdsfa"},
            2: {id: 2, title: "gfgerger"},
            3: {id: 3, title: "getgtehth"}
        });
        let newState = tasksReducer(initialState, action);
        expect(newState.tasks).toMatchObject(mockData);
    });

    test('after ADD_TASK newState has to contain new board', () => {
        let mockDataResult = {
            1: {id: 1, title: "Watch 50 videos about React"},
            2: {id: 2, title: "Spring 5 videos"},
            3: {id: 3, title: "Complete DND"}
        };
        let action = addTaskSuccess({id: 3, title: "Complete DND"});
        let newState = tasksReducer(initialState, action);
        expect(newState.tasks).toMatchObject(mockDataResult["3"]);
    })
});