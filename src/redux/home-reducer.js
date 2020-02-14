import {combineReducers} from "redux";
import {boardsReducer} from "./boards-reducer";
import {boardReducer} from "./board-reducer";

import {tasksReducer} from "./tasks-reducer";

export default combineReducers({
    boards: boardsReducer,
    currentBoard: boardReducer,
    tasks: tasksReducer,
});