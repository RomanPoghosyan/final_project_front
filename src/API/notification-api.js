import {instance} from "./common/axios-instance";
import {getToken} from "./common/token";
import {AUTHORIZATION} from "./common/authoriztion";

/**
 *
 * notificationAPI ( notification API calls )
 *
 * @type {{sendInvitationNotification(*): *, getNotifications(): *}}
 */
export const notificationAPI = {
    sendInvitationNotification (notification) {
        return instance.post(`notifications/invite`, {...notification}, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },

    getNotifications () {
        return instance.get ('notifications', {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },

    putNotificationStatus ( notificationId, isSeen ) {
        return instance.put ( `notifications/set-status`, { notificationId, isSeen }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },

    getLastFiveNotifications () {
        return instance.get ( `notifications/last-notifications`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },

    replyToInvitation (notificationId, isAccepted) {
        return instance.put ( `notifications/reply`, { notificationId, isAccepted }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
};
