import * as axios from "axios";

let TOKEN = "";

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
                "Authorization": getToken(),
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
                "Authorization": getToken(),
            }
        });
    },
    addBoard(board) {
        return instance.post(`projects`, {
                ...board
            }, {
                headers: {
                    "Authorization": getToken(),
                }
            }
        );
    }
};

