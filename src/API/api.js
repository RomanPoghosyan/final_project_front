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
    getBoard(boardId) {
        return instance.get(`projects/${boardId}`, {
                headers: {
                    [AUTHORIZATION]: getToken(),
                }
            }
        );
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
    setColumnOrder(body) {
        return instance.put(`projects/column-reorder`, {
            ...body
        }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
    setTaskOrder(body) {
        return instance.put(`statuses/task-reorder`, {
            ...body
        }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
    addColumn(status) {
        return instance.post(`statuses`, {
            ...status
        }, {
            headers: {
                "Authorization": getToken(),
            }
        } )
    },
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
    },
    getTaskInfo (taskId) {
        return instance.get(`tasks/${taskId}`, {
                headers: {
                    [AUTHORIZATION]: getToken(),
                }
            }
        );
    },
    getDailyTasks() {
        return instance.get(`tasks/daily`, {
            headers: {
                [AUTHORIZATION]: getToken()
            }
        })
    },
    changeTitle(body){
        return instance.put(`tasks/title`, {
            ...body
        }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
    changeDescription(body){
        return instance.put(`tasks/description`, {
            ...body
        }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
};
import {authAPI} from "./auth-api";
import {boardAPI} from "./board-api";
import {notificationAPI} from "./notification-api";
import {rolesAPI} from "./roles-api";
import {taskAPI} from "./task-api";
import {userAPI} from "./user-api";

export  {
  authAPI,
  boardAPI,
  notificationAPI,
  rolesAPI,
  taskAPI,
  userAPI,
};