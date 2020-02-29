import {boardAPI} from "../../API/api";
import {setNotify} from "../Notify/notify-reducer";

const SET_BOARDS = "SET_BOARDS";
const ADD_BOARD = "ADD_BOARD";

const initialState = [];

/**
 *
 * boardsReducer ( should return new state for boardsReducer )
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {[]|*[]} {Array || Object}
 */

export const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARDS:
            return [
                ...action.payload
            ];
        case ADD_BOARD:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

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
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
        });
};


