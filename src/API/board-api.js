import {instance} from "./common/axios-instance";
import {AUTHORIZATION} from "./common/authoriztion";
import {getToken} from "./common/token";

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
                [AUTHORIZATION]: getToken(),
            }
        } )
    },

    getDidTasksForAllUsers ( boardId ) {
        return instance.get (`projects/${boardId}/data`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    }
};

