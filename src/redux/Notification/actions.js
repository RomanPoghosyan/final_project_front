import {notificationAPI} from "../../API/api";
import {setNotify} from "../Notify/notify-reducer";
import {SET_INVITATION_SUCCESS, SET_NOTIFICATION_STATUS_SUCCESS, SET_NOTIFICATIONS} from "./action-types";

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

export const getLastNotifications = () => (dispatch) => {
    return notificationAPI.getLastFiveNotifications()
        .then(({data}) => {
            if (data.body !== null)
                dispatch(setNotifications(data.body));
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                    "Something went wrong"}`
            }));
        });
};


export const setNotificationStatusSuccess = (notificationId, status) => ({
    type: SET_NOTIFICATION_STATUS_SUCCESS,
    payload: {notificationId, status}
});

export const setNotificationStatus = (notificationId, isSeen = false) => (dispatch, getState) => {
    return notificationAPI.putNotificationStatus(notificationId, isSeen)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setNotificationStatusSuccess(notificationId, data.body.status));
                setNotify({open: true, type: "success", content: "Invitation accepted!"});
            }
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                    "Something went wrong"}`
            }));
        });
};


/**
 *
 * sendInvitationNotification ( adds notification to the user )
 *
 * @param notification {{projectId: *, roleId: *, username: *}}
 * @returns {function(*): *}
 */
export const sendInvitationNotification = (notification) => (dispatch, getState) => {
    if (getState().user.searchedUsers.some(u => u.username === notification.username)) {
        return notificationAPI.sendInvitationNotification(notification)
            .then(({data}) => {
                dispatch(setNotify({
                    open: true, type: 'success', content: "Invitation sent!"
                }));
            });
    } else {
        dispatch(setNotify({
            open: true, type: 'error', content: "Something went wrong"
        }));
    }
};



export const setInvitationStatus = (notificationId, invitationStatus, status) => ({
    type: SET_INVITATION_SUCCESS,
    payload: {notificationId, invitationStatus, status}
});

export const replyToInvitation = (notificationId, isAccepted) => (dispatch) => {
    return notificationAPI.replyToInvitation(notificationId, isAccepted)
        .then(({data}) => {
            dispatch(setInvitationStatus(notificationId, data.body.invitationStatus, "SEEN"));
            if(data.body.invitationStatus === "ACCEPTED"){
                // dispatch(getBoards())
            }
            setNotify({open: true, type: "success", content: `Invitation ${isAccepted? "accept" : "reject"}ed!`});
        }).catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.messages.length ? data.messages[0] :
                    "Something went wrong"}`
            }));
        });
};

