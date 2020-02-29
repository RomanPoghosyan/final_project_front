import React from "react";
import {tasksReducer} from "./tasks-reducer";
import {addTaskSuccess, setCurrentTaskInfo, setDailyTasks, setTasks} from "./actions"

describe('tasks-reducer test', () => {
    let initialState = {
        tasks: {
            1: {id: 1, title: "Watch 50 videos about React", isFetched: false},
            2: {id: 2, title: "Spring 5 videos", isFetched: false},
        },
        dailyTasks: [],
        current: null
    };
    test('return initial state', () => {
        let action = {};
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('after SET_TASKS boards has to be added', () => {
        let mockData = {
            tasks: {
                1: {id: 1, title: "task1"},
                2: {id: 2, title: "task2"},
                3: {id: 3, title: "task3"}
            },
            dailyTasks: [],
            current: null
        };
        let action = setTasks({
            1: {id: 1, title: "task1"},
            2: {id: 2, title: "task2"},
            3: {id: 3, title: "task3"}
        });
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('after ADD_TASK newState has to contain new board', () => {
        let mockDataResult = {
            tasks: {
                1: {id: 1, title: "Watch 50 videos about React"},
                2: {id: 2, title: "Spring 5 videos"},
                3: {id: 3, title: "Complete DND"}
            },
            dailyTasks: [],
            current: null
        };
        let action = addTaskSuccess({3: {id: 3, title: "Complete DND"}});
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult);
    });

    test('SET_DAILY_TASKS', () => {
        let mockDataResult = {
            tasks: {
                1: {id: 1, title: "Watch 50 videos about React"},
                2: {id: 2, title: "Spring 5 videos"},
            },
            dailyTasks: [{id: 3, title: "Complete DND"}],
            current: null
        };
        let action = setDailyTasks([{id: 3, title: "Complete DND"}]);
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult);
    });

    test('SET_CURRENT_TASK_INFO', () => {
        let mockDataResult = {
            tasks: {
                1: {id: 1, title: "Watch 50 videos about React", isFetched: false},
                2: {id: 2, title: "Spring 5 videos", isFetched: false},
                3: {id: 3, title: "Complete DND", isFetched: true}
            },
            dailyTasks: [],
            current: 3
        };
        let action = setCurrentTaskInfo({id: 3, title: "Complete DND", isFetched: false});
        let newState = tasksReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult);
    });


});