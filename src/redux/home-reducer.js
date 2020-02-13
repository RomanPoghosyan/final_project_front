import {combineReducers} from "redux";
import {boardsReducer} from "./boards-reducer";
import {tasksReducer} from "./tasks-reducer";

export default combineReducers({
    boards: boardsReducer,
    tasks: tasksReducer,
});