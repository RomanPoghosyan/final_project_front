import {instance} from "./common/axios-instance";
import {AUTHORIZATION} from "./common/authoriztion";
import {getToken} from "./common/token";

export const rolesAPI = {
    getRoles (boardId) {
        return instance.get (`roles/${boardId}`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    getPrivileges() {
        return instance.get (`roles/privileges`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    },
    addRole (role) {
        return instance.post(`roles`, {...role}, {
            headers: {
                [AUTHORIZATION]: getToken()
            }
        })
    },
    editRolePrivilege (data) {
        return instance.put(`roles/privilege`, {...data}, {
            headers: {
                [AUTHORIZATION]: getToken()
            }
        })
    },
};