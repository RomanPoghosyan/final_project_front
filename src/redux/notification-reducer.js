import {notificationAPI} from "../API/api";
import {setNotify} from "./notify-reducer";

export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const SET_NOTIFICATION_STATUS_SUCCESS = 'SET_NOTIFICATION_STATUS_SUCCESS';

const initialState = [];

/**
 *
 * notificationReducer ( should return new state for notificationReducer )
 *
 * @param {Array} state
 * @param {Object} action
 * @returns {{}}
 */

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return action.payload;
        case SET_NOTIFICATION_STATUS_SUCCESS:
            return state.map(notification => {
                if (notification.id === action.payload.notificationId) {
                    return {
                        ...notification,
                        status: action.payload.status,
                    };
                }
                return notification;
            });
        default:
            return state;
    }
};

/**
 *
 * setNotifications ( action for setting notification )
 *
 * @param {Array} notifications
 * @returns {{payload, type: string}}
 */

export function setNotifications(notifications) {
    return {type: SET_NOTIFICATIONS, payload: notifications}
}

/**
 *
 * getNotifications ( returns all notifications for current user )
 *
 * @returns {function(*): Q.Promise<any> | undefined}
 */

export const getNotifications = () => dispatch => {
    return notificationAPI.getNotifications()
        .then(({data}) => {
            dispatch(setNotifications(data.body));
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
        })
};

/**
 *
 * sendInvitationNotification ( adds notification to the user )
 *
 * @param userId
 * @param projectId
 * @returns {function(*): *}
 */
export const sendInvitationNotification = (userId, projectId) => dispatch => {
    return notificationAPI.sendInvitationNotification({userId, projectId})
        .then(({data}) => {
            console.log(data);
        })
};

export const setNotificationStatusSuccess = (notificationId, status) => ({
    type: SET_NOTIFICATION_STATUS_SUCCESS,
    payload: {notificationId, status}
});

export const setNotificationStatus = (notificationId, isSeen = false) => (dispatch, getState) => {
    return notificationAPI.putNotificationStatus(notificationId, isSeen)
        .then(({data}) => {
            // const state = [...getState().home.notification];
            // const index = state.findIndex(val => val.id === data.body.id );
            // state[index].status = data.body.status;
            // dispatch(setNotifications(state));
            dispatch(setNotificationStatusSuccess(notificationId, data.body.status));
            setNotify({open: true, type: "success", content: "Notification status is changed!"});
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
        });
};

export const getLastNotifications = () => dispatch => {
    return notificationAPI.getLastFiveNotifications()
        .then ( ({data}) => {
          if ( data.body !== null )
              dispatch(setNotifications(data.body));
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
        })
};