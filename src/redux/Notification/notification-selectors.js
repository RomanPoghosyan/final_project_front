import {createSelector} from "reselect";

export const getAllNotificationsSelect = state => state.home.notification;

export const getFilteredNotificationsSelect = createSelector(getAllNotificationsSelect, notifications => {
    return notifications.filter ( notification =>  notification.status === 'NOT_SEEN' );
});
