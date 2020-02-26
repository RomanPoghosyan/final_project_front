import {INITIALIZED_SUCCESS} from "./action-types";


let initialState = {
    initialized: false
};

/**
 *
 * appReducer ( should return new state for appReducer )
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {{state: Object, initialized: boolean}}
 */

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};


export default appReducer;