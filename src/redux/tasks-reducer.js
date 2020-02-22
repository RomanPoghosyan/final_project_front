import {taskAPI} from "../API/api";

const SET_TASKS = "SET_TASKS";
const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";

const initialState = {
    // tasks: {
    //     1: {id: 1, title: "Watch 50 videos about React"},
    //     2: {id: 2, title: "Spring 5 videos"},
    //     3: {id: 3, title: "Complete DND"},
    //     4: {id: 4, title: "Think about other brolems that might be happen"},
    // },
    // current: null,
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: {
                    ...action.payload,
                }
            };
        case ADD_TASK_SUCCESS:
            const {task} = action.payload;
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    ...task,
                },
            };
        default:
            return state;
    }
};

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
                // dispatch(addTaskToColumnSuccess(data.body, columnId));
            }
        })
        .catch(({response: {data}}) => {
            // let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            // dispatch(stopSubmit("addTask", {_error: message}));
        });
};