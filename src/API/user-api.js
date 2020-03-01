import {instance} from "./common/axios-instance";
import {getToken, setToken} from "./common/token";
import {AUTHORIZATION} from "./common/authoriztion";


/**
 *
 * userAPI ( user API calls )
 *
 * @type {{getUser(*=): *, updateUser(*): *}}
 */
export const userAPI = {
    getUser(token) {
        setToken(token);
        return instance.get ('users', {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    updateUser (user) {
        return instance.put ('users',  {...user}, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    search(username, boardId) {
        return instance.get (`users/search/${username}/${boardId}`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    setFbToken ( token ) {
        return instance.put ( `users/set-fb-token`, token, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        })
    },
    getBoardUsers(boardId){
        return instance.get (`users/all/${boardId}`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    changeUserRole(data){
        return instance.put ('users/role',  {...data}, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
};
