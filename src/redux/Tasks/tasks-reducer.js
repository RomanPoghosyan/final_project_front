import {ADD_TASK_SUCCESS, SET_DAILY_TASKS, SET_TASKS} from "./action-types";


const initialState = {
    // tasks: {
    //     1: {id: 1, title: "Watch 50 videos about React"},
    //     2: {id: 2, title: "Spring 5 videos"},
    //     3: {id: 3, title: "Complete DND"},
    //     4: {id: 4, title: "Think about other brolems that might be happen"},
    // },
    // dailyTasks:[],
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
        case SET_DAILY_TASKS:
            return {
                ...state,
                dailyTasks: [
                    // ...state.dailyTasks,
                    ...action.payload,
                ]
            };
        default:
            return state;
    }
};

