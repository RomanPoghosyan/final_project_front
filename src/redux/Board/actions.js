import {boardAPI} from "../../API/api";
import {setTasks} from "../Tasks/actions";
import {
    ADD_COLUMN_SUCCESS,
    ADD_TASK_TO_COLUMN_SUCCESS,
    COLUMN_REORDER,
    DATA_FETCHED,
    SET_BOARD_DATA,
    TASK_MOVED,
    TASK_REORDER
} from "./action-types";
import {setNotify} from "../Notify/notify-reducer";
import { push } from 'connected-react-router';


export const dataFetched = (isFetched) => ({type: DATA_FETCHED, payload: isFetched});

export const setBoardData = (board) => ({type: SET_BOARD_DATA, payload: board});

export const getBoardData = (boardId) => (dispatch) => {
    console.log('bbb');
    dispatch(dataFetched(false));
    console.log('ccc');
    boardAPI.getBoard(boardId)
        .then(async ({data}) => {
            console.log('then');
            if (data.resultCode === 0) {
                const {tasks, ...board} = data.body;

                Promise.all([
                    dispatch(setTasks(tasks)),
                    dispatch(setBoardData(board)),
                ]).then(() => {
                    dispatch(dataFetched(true))
                });
            }
        })
        .catch((e) => {
            console.log('catch');
            console.log(e);
            dispatch(setNotify({
                open: true, type: 'error', content: `asddsa`
            }));
            // dispatch(setNotify({
            //     open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
            //         "Something went wrong"}`
            // }));
            // dispatch(push('/not-found'));
        });
    // .catch(({response: {data}}) => {
    //     console.log(data);
    //     // TODO notify that user doesn't have any projects
    // });
};

export const addColumnSuccess = (column) => ({type: ADD_COLUMN_SUCCESS, payload: column});

export const addColumn = (name) => (dispatch, getState) => {
    const status = {
        name,
        projectId: getState().home.currentBoard.id,
    };
    boardAPI.addColumn(status)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addColumnSuccess(data.body));
                dispatch(setNotify({
                    open: true, type: 'success', content: `Column added successfully!`
                }));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                    "Something went wrong"}`
            }));
        });
};

export const addTaskToColumnSuccess = (task, columnId) => ({
    type: ADD_TASK_TO_COLUMN_SUCCESS,
    payload: {task, columnId}
});

export const columnReordered = (columnOrder) => ({type: COLUMN_REORDER, payload: columnOrder});

export const taskReordered = (columnId, taskIds) => ({type: TASK_REORDER, payload: {columnId, taskIds}});

export const taskMoved = (result) => ({type: TASK_MOVED, payload: result});