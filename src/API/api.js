import * as axios from "axios";

let TOKEN = "";
const AUTHORIZATION = "Authorization";



const getToken = () => {
    return `Bearer ${TOKEN}`;
};
const setToken = (t) => {
    TOKEN = t;
};

const instance = axios.create({
    baseURL: "http://localhost:8080/api/1.0/",
    headers: {
        "Content-Type": "application/json",
    }
});


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

export const taskAPI = {
    addTask (task) {
        return instance.post(`tasks`, {...task}, {
            headers: {
                [AUTHORIZATION]: getToken()
            }
        })
    }
};

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
    search(username) {
        return instance.get (`users/search/${username}`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    }
};