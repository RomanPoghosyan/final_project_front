import {getUserData} from "../User/actions";
import {getLastNotifications} from "../Notification/actions";
import {INITIALIZED_SUCCESS} from "./action-types";

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
    if (getState().user.currentUser.isAuth && !getState().home.notification.length)
        await dispatch(getLastNotifications());
    dispatch(initializedSuccess());
};