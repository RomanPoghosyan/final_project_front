import {taskAPI} from "../../API/api";
import {addTaskToColumnSuccess} from "../Board/actions";
import {
    ADD_TASK_SUCCESS,
    CHANGE_TASK_PROP_SUCCESS,
    SET_CURRENT_TASK_INFO,
    SET_DAILY_TASKS,
    SET_TASKS
} from "./action-types";
import {setNotify} from "../Notify/notify-reducer";
import {push} from "connected-react-router";

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
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
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


export const setCurrentTaskInfo = (taskInfo) => ({type: SET_CURRENT_TASK_INFO, payload: taskInfo});

export const getCurrentTaskInfo = taskId => (dispatch, getState) => {
    if(getState().home.tasks.tasks[taskId].isFetched) return;

    taskAPI.getTaskInfo(taskId)
        .then(({data}) => {
            dispatch(setCurrentTaskInfo(data.body));
        })
        .catch(({response: {data}}) => {
            const boardId = getState().home.currentBoard.id;
            dispatch(setNotify({ open: true, type: 'error', content: "Something went wrong! Task info not found!"}));
            dispatch(push(`/board/${boardId}`));
        });
};

export const changeTaskPropSuccess = (id, prop, value) => ({type: CHANGE_TASK_PROP_SUCCESS, payload: {id, prop, value}});

export const changeTitle = (title) => (dispatch, getState) => {
    const taskId = getState().home.tasks.current;

    taskAPI.changeTitle({taskId, title})
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(changeTaskPropSuccess(taskId, "title", title));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({ open: true, type: 'error', content: "Could not change task title!"}));
        });
};

export const changeDescription = (description) => (dispatch, getState) => {
    const taskId = getState().home.tasks.current;

    taskAPI.changeDescription({taskId, description})
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(changeTaskPropSuccess(taskId, "description", description));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({ open: true, type: 'error', content: "Could not change task description!"}));
        });
};

export const assignTask = (assigneeId) => (dispatch, getState) => {
    const taskId = getState().home.tasks.current;
    const boardId = getState().home.currentBoard.id;

    taskAPI.assignTask({taskId, assigneeId, "projectId": boardId})
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(changeTaskPropSuccess(taskId, "assigneeId", +assigneeId));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({ open: true, type: 'error', content: "Could not change assignee!"}));
        });
};