import {taskAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_TASK = "ADD_TASK";

const initialState = {};

/**
 *
 * tasksReducer ( should return new state for tasksReducer )
 *
 * @param state
 * @param action
 * @returns {{}}
 */

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

/**
 *
 * addTaskAction ( should return action with type ADD_TASK  )
 *
 * @param {Object} task
 * @returns {{payload: Object, type: string}}
 */

export const addTaskAction = task => ({type: ADD_TASK, payload: task});

/**
 *
 * addTask ( should call to the server for posting task and call addTaskAction if everything was fine  )
 *
 * @param {Object} task
 * @returns {function(...[*]=)}
 */

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