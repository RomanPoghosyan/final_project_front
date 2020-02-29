import {createSelector} from "reselect";

export const getAllNotifications = state => state.home.notification;

export const getFilteredNotifications = createSelector(getAllNotifications, notifications => {
    return notifications.filter ( notification =>  notification.status === 'NOT_SEEN' );
});
