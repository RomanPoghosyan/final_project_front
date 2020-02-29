import {boardAPI} from "../../API/api";
import {setNotify} from "../Notify/notify-reducer";
import {ADD_BOARD, SET_BOARDS} from "./action-types";

/**
 *
 * setBoards ( should return action with type SET_BOARDS when boards are got it from server )
 *
 * @param {Array || Object} boards
 * @returns {{payload: Array || Object, type: string}}
 */

export const setBoards = (boards) => ({type: SET_BOARDS, payload: boards});

/**
 *
 * getBoards ( should call to the server and get boards by user id )
 *
 * @param {number} userId
 * @returns {function(...[*]=)} (from thunk)
 */
export const getBoards = (userId) => (dispatch) => {
    boardAPI.getAllByUserId(userId)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setBoards(data.body));
            }else{
                dispatch(setNotify({
                    open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                        "Something went wrong"}`
                }));
            }
        })
        .catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                    "Something went wrong"}`
            }));
            // TODO notify that user doesn't have any projects
        });
};

/**
 *
 * addBoardSuccess ( should return action with type ADD_BOARD when board is added success )
 *
 * @param {Object} board
 * @returns {{payload: Object, type: string}}
 */

export const addBoardSuccess = (board) => ({type: ADD_BOARD, payload: board});

/**
 *
 * addBoard ( should save the project in the db and dispatch addBoardSuccess action )
 *
 * @param {Object} project
 * @returns {function(...[*]=)} (from thunk)
 */
export const addBoard = (project) => (dispatch) => {
    boardAPI.addBoard(project)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addBoardSuccess(data.body));
                dispatch(setNotify({
                    open: true, type: 'success', content: `Board added successfully!`
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


