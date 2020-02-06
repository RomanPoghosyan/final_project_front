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
    me(token){
        setToken(token);
        return instance.get(`auth/me`, {headers: {
                "Authorization": getToken(),
            }})
            .then(response => response.data);
    },
    login(email, password){
        return instance.post(`auth/login`, {username: email, password})
            .then(response => response.data);
    },
    logout(){
        setToken("");
    }
};

