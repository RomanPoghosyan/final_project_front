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
    getUserData(token) {
        setToken(token);
        return instance.get(`auth/userData`, {
            headers: {
                [AUTHORIZATION]: getToken(),
            }
        });
    }
};

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
    }
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