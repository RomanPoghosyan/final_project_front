import { instance } from "./common/axios-instance";
import {AUTHORIZATION} from "./common/authoriztion";
import {getToken} from "./common/token";

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
    assignTask(body){
        return instance.put(`tasks/assign`, {
            ...body
        }, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
};

