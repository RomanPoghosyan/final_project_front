import {boardAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {setTasks} from "./tasks-reducer";

const SET_BOARD_DATA = "SET_BOARD_DATA";
const ADD_COLUMN_SUCCESS = "ADD_COLUMN_SUCCESS";
// const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
const ADD_TASK_TO_COLUMN_SUCCESS = "ADD_TASK_TO_COLUMN_SUCCESS";
const COLUMN_REORDER = "COLUMN_REORDER";
const TASK_REORDER = "TASK_REORDER";
const TASK_MOVED = "TASK_MOVED";
const DATA_FETCHED = "DATA_FETCHED";

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
                    ...state.columnOrder, Object.keys(action.payload)[0],
                ]
            };
        // case ADD_TASK_SUCCESS:
        case ADD_TASK_TO_COLUMN_SUCCESS:
            const {task, columnId} = action.payload;
            return {
                ...state,
                // tasks: {
                //     ...state.tasks,
                //     ...task,
                // },
                columns: {
                    ...state.columns,
                    [columnId]: {
                        ...state.columns[columnId],
                        taskIds: [...state.columns[columnId].taskIds, Object.keys(task)[0]],
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

export const dataFetched = (isFetched) => ({type: DATA_FETCHED, payload: isFetched});

export const setBoardData = (board) => ({type: SET_BOARD_DATA, payload: board});

export const getBoardData = (boardId) => (dispatch) => {
    dispatch(dataFetched(false));
    boardAPI.getBoard(boardId)
        .then(async ({data}) => {
            if (data.resultCode === 0) {
                const {tasks, ...board} = data.body;

                Promise.all([
                    dispatch(setTasks(tasks)),
                    dispatch(setBoardData(board)),
                ]).then(() => {
                    dispatch(dataFetched(true))
                });
            }
        })
    // .catch(({response: {data}}) => {
    //     console.log(data);
    //     // TODO notify that user doesn't have any projects
    // });
};

export const addColumnSuccess = (column) => ({type: ADD_COLUMN_SUCCESS, payload: column});

export const addColumn = (name) => (dispatch, getState) => {
    const status = {
        name,
        projectId: getState().home.currentBoard.id,
    };
    boardAPI.addColumn(status)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addColumnSuccess(data.body));
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("addColumn", {_error: message}));
        });
};

// export const addTaskSuccess = (task, columnId) => ({type: ADD_TASK_SUCCESS, payload: {task, columnId}});
export const addTaskToColumnSuccess = (task, columnId) => ({
    type: ADD_TASK_TO_COLUMN_SUCCESS,
    payload: {task, columnId}
});

// export const addTask = (title, columnId) => (dispatch, getState) => {
//     const task = {
//         title,
//         task_status_id: columnId,
//         project_id: getState().home.currentBoard.id,
//     };
//     taskAPI.addTask(task)
//         .then(({data}) => {
//             if (data.resultCode === 0) {
//                 dispatch(addTaskSuccess(data.body, columnId));
//             }
//         })
//         .catch(({response: {data}}) => {
//             // let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
//             // dispatch(stopSubmit("addTask", {_error: message}));
//         });
// };

export const columnReordered = (columnOrder) => ({type: COLUMN_REORDER, payload: columnOrder});

export const taskReordered = (columnId, taskIds) => ({type: TASK_REORDER, payload: {columnId, taskIds}});

export const taskMoved = (result) => ({type: TASK_MOVED, payload: result});