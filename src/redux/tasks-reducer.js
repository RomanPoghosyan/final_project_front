import {taskAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_TASK = "ADD_TASK";

const initialState = {};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const addTaskAction = task => ({type: ADD_TASK, payload: task});

export const addTask = task => dispatch => {
    taskAPI.addTask(task)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addTaskAction(data.body))
            }
        }).catch(({response: data}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("addTask"), {_error: message});
    })
};
// addTask ( { title: "Hello world", description: "wORLD hEllo", "project_id": "1", "assignee_id": "1", "assignor":"1" } );
// window.addTask = addTask;