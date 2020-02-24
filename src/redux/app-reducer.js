import {getUserData} from "./user-reducer";
import {getLastNotifications} from "./notification-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

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

/**
 *
 * initializedSuccess ( should return action with type INITIALIZED_SUCCESS when initializing is finished success )
 *
 * @returns {{type: string}}
 */

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

/**
 *
 * initialize ( should call to the server for getting user object data )
 *
 * @returns {function(...[*]=)} (from thunk)
 */

export const initialize = () => async (dispatch, getState) => {
    await dispatch(getUserData());
    if ( getState().user.isAuth && !getState().home.notifications.length )
        await dispatch(getLastNotifications());
    dispatch(initializedSuccess());
};

export default appReducer;