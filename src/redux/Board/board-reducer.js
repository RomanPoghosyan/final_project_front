import {
    ADD_COLUMN_SUCCESS,
    ADD_TASK_TO_COLUMN_SUCCESS,
    COLUMN_REORDER,
    DATA_FETCHED,
    SET_BOARD_DATA,
    TASK_REORDER
} from "./action-types";


const initialState = {
    isFetched: false,
    // id: 1,
    // name: "Workfront Project",
    // columns: {
    //     1: {
    //         id: 1,
    //         title: "To do",
    //         taskIds: [1, 2, 3, 4],
    //     },
    //     2: {
    //         id: 2,
    //         title: "In Progress",
    //         taskIds: [],
    //     },
    //     3: {
    //         id: 3,
    //         title: "Done",
    //         taskIds: [],
    //     },
    // },
    // columnOrder: [1, 2, 3],
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_FETCHED:
            return {
                ...state,
                isFetched: action.payload
            };
        case SET_BOARD_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case ADD_COLUMN_SUCCESS:
            return {
                ...state,
                columns: {
                    ...state.columns,
                    ...action.payload,
                },
                columnOrder: [
                    ...state.columnOrder, +Object.keys(action.payload)[0],
                ]
            };
        case ADD_TASK_TO_COLUMN_SUCCESS:
            const {task, columnId} = action.payload;
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [columnId]: {
                        ...state.columns[columnId],
                        taskIds: [...state.columns[columnId].taskIds, +Object.keys(task)[0]],
                    }
                }
            };
        case COLUMN_REORDER:
            return {
                ...state,
                columnOrder: action.payload,
            };
        case TASK_REORDER:
            const newColumn = {
                ...state.columns[action.payload.columnId],
                taskIds: action.payload.taskIds
            };
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                }
            };
        default:
            return state;
    }
};
