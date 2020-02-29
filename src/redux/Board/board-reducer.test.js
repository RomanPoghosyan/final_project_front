import React from "react";
import {boardReducer} from "./board-reducer";
import {
    addColumnSuccess,
    addTaskToColumnSuccess,
    columnReordered,
    dataFetched,
    setBoardData,
    taskReordered
} from "./actions";
;

describe('board-reducer tests', () => {
    const initialState = {
        isFetched: false,
        id: 1,
        name: "Workfront Project",
        columns: {
            1: {
                id: 1,
                title: "To do",
                taskIds: [1, 2, 3, 4],
            },
            2: {
                id: 2,
                title: "In Progress",
                taskIds: [],
            },
            3: {
                id: 3,
                title: "Done",
                taskIds: [],
            },
        },
        columnOrder: [1, 2, 3],
    };

    test('return initial state', () => {
        let action = {};
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(initialState);
    });

    test('DATA_FETCHED', () => {
        let mockData = {
            isFetched: true,
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [],
                },
            },
            columnOrder: [1, 2, 3],
        };
        let action = dataFetched(true);
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('SET_BOARD_DATA', () => {
        let mockData = {
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [1, 2],
                },
            },
            columnOrder: [1, 2, 3],
        };
        let action = setBoardData(mockData);
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(mockData);
    });

    test('ADD_COLUMN_SUCCESS', () => {
        let mockDataResult = {
            isFetched: false,
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [],
                },
                4: {
                    id: 4,
                    title: "Complete",
                    taskIds: [],
                },
            },
            columnOrder: [1, 2, 3, 4],
        };
        let mockColumn = {
            4: {
                id: 4,
                title: "Complete",
                taskIds: [],
            },
        };
        let action = addColumnSuccess(mockColumn);
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult)
    });

    test('ADD_TASK_TO_COLUMN_SUCCESS', () => {
        let mockDataResult = {
            isFetched: false,
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [3],
                },
            },
            columnOrder: [1, 2, 3],
        };
        let mockTask = {
            3: {
                id: 3,
                title: "Done",
                taskIds: [],
            }
        };
        let action = addTaskToColumnSuccess(mockTask, 3);
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult)
    });

    test('COLUMN_REORDER', () => {
        let mockDataResult = {
            isFetched: false,
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [],
                },
                4: {
                    id: 4,
                    title: "Complete",
                    taskIds: [],
                },
            },
            columnOrder: [1, 2, 3, 4],
        };
        let mockColumnOrder = [1, 2, 3, 4];
        let action = columnReordered(mockColumnOrder);
        let newState = boardReducer(initialState, action);
        expect(newState.columnOrder).toMatchObject(mockDataResult.columnOrder);
    });

    test('TASK_REORDER', () => {
        let mockDataResult = {
            isFetched: false,
            id: 1,
            name: "Workfront Project",
            columns: {
                1: {
                    id: 1,
                    title: "To do",
                    taskIds: [1, 2, 3, 4],
                },
                2: {
                    id: 2,
                    title: "In Progress",
                    taskIds: [],
                },
                3: {
                    id: 3,
                    title: "Done",
                    taskIds: [1, 3, 2],
                },
            },
            columnOrder: [1, 2, 3],
        };
        let action = taskReordered(3, [1, 3, 2]);
        let newState = boardReducer(initialState, action);
        expect(newState).toMatchObject(mockDataResult)
    });
});