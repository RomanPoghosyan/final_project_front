import {instance} from "./common/axios-instance";
import {AUTHORIZATION} from "./common/authoriztion";
import {setToken, getToken} from "./common/token";

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
