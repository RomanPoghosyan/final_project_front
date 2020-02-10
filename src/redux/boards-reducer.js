import {boardAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_BOARDS = "SET_BOARDS";
const ADD_BOARD = "ADD_BOARD";

const initialState = [];

export const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARDS:
            return [
                ...state,
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

export const setBoards = (boards) => ({type: SET_BOARDS, payload: boards});

export const getBoards = (userId) => (dispatch) => {
    boardAPI.getAllByUserId(userId)
        .then(({data}) => {
            dispatch(setBoards(data.body));
        })
};

export const addBoardSuccess = (board) => ({type: ADD_BOARD, payload: board});

export const addBoard = (project) => (dispatch) => {
    boardAPI.addBoard(project)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addBoardSuccess(data.body));
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("addBoard", {_error: message}));
        });
};


