import {isEqual} from "../utils/helpers/isEqual";
import {boardAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const COLUMN_REORDER = "COLUMN_REORDER";
const TASK_REORDER = "TASK_REORDER";

const initialState = {
    id: 1,
    name: "Workfront Project",
    tasks: {
        "task-1": {id: "task-1", content: "Watch 50 videos about React"},
        "task-2": {id: "task-2", content: "Spring 5 videos"},
        "task-3": {id: "task-3", content: "Complete DND"},
        "task-4": {id: "task-4", content: "Think about other brolems that might be happen"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        "column-2": {
            id: "column-2",
            title: "In Progress",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: [],
        },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const columnReordered = (columnOrder) => ({type: COLUMN_REORDER, payload: columnOrder});

export const taskReordered = (columnId, taskIds) => ({type: TASK_REORDER, payload: {columnId, taskIds}});

export const taskMoved = (result) => (dispatch, getState) => {
    const state = getState().home.currentBoard;
    const {destination, source, draggableId, type} = result;

    if (!destination || isEqual(destination, source)) return;

    if(type === "column"){
        const newColumnOrder = [...state.columnOrder];
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        dispatch(columnReordered(newColumnOrder));
        return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
        const newTaskIds = [...start.taskIds];
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        dispatch(taskReordered(start.id, newTaskIds));
        return;
    }

    //Moving from one list to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    dispatch(taskReordered(start.id, startTaskIds));

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    dispatch(taskReordered(finish.id, finishTaskIds));
};

export const addColumn = (name) => (dispatch, getState) => {
    const status = {
        name,
        projectId: getState().home.currentBoard.id,
    };
    boardAPI.addColumn(status)
        .then(({data}) => {
            if (data.resultCode === 0) {
                // dispatch(someAction(data.body));
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("addColumn", {_error: message}));
        });
};