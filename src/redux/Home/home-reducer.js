import {combineReducers} from "redux";
import {boardsReducer} from "../Boards/boards-reducer";
import {boardReducer} from "../Board/board-reducer";
import {tasksReducer} from "../Tasks/tasks-reducer";
import {roleReducer} from "../Role/role-reducer";
import {notificationReducer} from "../Notification/notification-reducer";

export default combineReducers({
    boards: boardsReducer,
    currentBoard: boardReducer,
    tasks: tasksReducer,
    role: roleReducer,
    notification: notificationReducer,
});