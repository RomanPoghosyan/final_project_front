import {combineReducers} from "redux";
import {boardsReducer} from "./boards-reducer";
import {boardReducer} from "./board-reducer";


export default combineReducers({
    boards: boardsReducer,
    currentBoard: boardReducer,
});