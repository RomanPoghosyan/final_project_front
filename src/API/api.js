import * as axios from "axios";

let TOKEN = "";
const AUTHORIZATION = "Authorization";


/**
 *
 * getToken ( returns TOKEN with Bearer keyword )
 *
 * @returns {string}
 */
const getToken = () => {
    return `Bearer ${TOKEN}`;
};

/**
 *
 * setToken ( setter for token )
 *
 * @param t
 */
const setToken = (t) => {
    TOKEN = t;
};

const instance = axios.create({
    baseURL: "http://localhost:8080/api/1.0/",
    headers: {
        "Content-Type": "application/json",
    }
});

/**
 *
 * authAPI ( authentication api calls )
 *
 * @type {{logout(): void, me(*=): *, login(*=, *): *, signup(*): *}}
 */
export const authAPI = {
    me(token) {
        setToken(token);
        return instance.get(`auth/me`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
    login(email, password) {
        return instance.post(`auth/login`, {username: email, password});
    },
    logout() {
        setToken("");
    },
    signup(singUpData) {
        return instance.post(`auth/signup`, {...singUpData});
    },
};

/**
 *
 * boardAPI ( board API calls )
 *
 * @type {{getAllByUserId(*): *, addColumn(*): *, addBoard(*): *}}
 */
export const boardAPI = {
    getAllByUserId(userId) {
        return instance.get(`projects/all/${userId}`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    addBoard(board) {
        return instance.post(`projects`, {
                ...board
            }, {
                headers: {
                    [AUTHORIZATION]: getToken(),
                }
            }
        );
    },
    addColumn(status) {
        return instance.post(`statuses`, {
            ...status
        }, {
            headers: {
                "Authorization": getToken(),
            }
        } )
    }
};


/**
 *
 * taskAPI ( task API calls )
 *
 * @type {{addTask(*): *}}
 */

export const taskAPI = {
    addTask (task) {
        return instance.post(`tasks`, {...task}, {
            headers: {
                [AUTHORIZATION]: getToken()
            }
        })
    }
};

/**
 *
 * userAPI ( user API calls )
 *
 * @type {{getUser(*=): *, updateUser(*): *}}
 */
export const userAPI = {
    getUser(token) {
        setToken(token);
        return instance.get ('', {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    updateUser (user) {
        return instance.put ('',  {...user}, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    }
};


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
    }
};