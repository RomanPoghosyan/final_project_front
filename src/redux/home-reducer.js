import {combineReducers} from "redux";
import {boardsReducer} from "./boards-reducer";


export default combineReducers({
    boards: boardsReducer
});