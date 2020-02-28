import {taskAPI} from "../../API/api";
import {addTaskToColumnSuccess} from "../Board/actions";
import {ADD_TASK_SUCCESS, SET_DAILY_TASKS, SET_TASKS} from "./action-types";
import {setNotify} from "../Notify/notify-reducer";

export const setTasks = (tasks) => ({type: SET_TASKS, payload: tasks});

export const addTaskSuccess = (task) => ({type: ADD_TASK_SUCCESS, payload: {task}});

export const addTask = (title, columnId) => (dispatch, getState) => {
    const task = {
        title,
        task_status_id: columnId,
        project_id: getState().home.currentBoard.id,
    };
    taskAPI.addTask(task)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addTaskSuccess(data.body));
                dispatch(addTaskToColumnSuccess(data.body, columnId));
                dispatch(setNotify({
                    open: true, type: 'success', content: `Task added successfully!`
                }));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
            // let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            // dispatch(stopSubmit("addTask", {_error: message}));
        });
};

export const setDailyTasks = (dailyTasks) => ({type: SET_DAILY_TASKS, payload: dailyTasks});

export const getDailyTasks = () => (dispatch) => {
    taskAPI.getDailyTasks()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setDailyTasks(data.body));
            }
        })
        .catch(() => {
        });
};