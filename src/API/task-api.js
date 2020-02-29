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
    }
};

