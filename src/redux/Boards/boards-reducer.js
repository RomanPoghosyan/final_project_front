import {ADD_BOARD, SET_BOARDS} from "./action-types";


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
