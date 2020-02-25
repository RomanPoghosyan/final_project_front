import {SET_INVITATION_SUCCESS, SET_NOTIFICATION_STATUS_SUCCESS, SET_NOTIFICATIONS} from "./action-types";


const initialState = [
    // {
    //     "id": 1,
    //     "status": "NOT_SEEN",
    //     "type": "INVITATION",
    //     "notifiedByFirstName": "roman",
    //     "notifiedByLastName": "roman",
    //     "projectName": "First Project",
    //     "taskTitle": null,
    //     "invitationStatus": "PENDING"
    // }
];

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
        case SET_INVITATION_SUCCESS:
            return state.map(notification => {
                if (notification.id === action.payload.notificationId) {
                    return {
                        ...notification,
                        status: action.payload.status,
                        invitationStatus: action.payload.invitationStatus,
                    };
                }
                return notification;
            });
        default:
            return state;
    }
};
