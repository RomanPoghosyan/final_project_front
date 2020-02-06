import * as axios from "axios";

<<<<<<< HEAD
const getToken = () => {
    return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb21hbiIsImV4cCI6MTU4MDg2MzA4NywiaWF0IjoxNTgwODQ1MDg3fQ.uUEua_4pNsGcG9XqnUN3nmitNyUlvbzFgEAzZFPzuDKNf4UOxB2Buw_r8CxBII6rpaVjanZhug7fCwMK9Uw29w";
};

const instance = axios.create({
    baseURL: "http://localhost:8080/api/1.0/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Authorization": getToken(),
=======
let TOKEN = "";

const getToken = () => {
    return `Bearer ${TOKEN}`;
}
const setToken = (t) => {
    TOKEN = t;
}

const instance = axios.create({
    baseURL: "http://localhost:8080/api/1.0/",
    headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${TOKEN}`,
>>>>>>> 450bdbfc0dd6c89647fdc17b3657ed48ddd4d3ec
    }
});



let meResponse = {
    resultCode: 0,
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        username: 'bla'
    }
};

let loginResponse = {
    resultCode: 0,
    data: {
        id: 2,
    }
};

export const authAPI = {
<<<<<<< HEAD
    me(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password){
        return instance.post(`auth/login`, {email, password})
            .then(response => response.data);
    },
    register (firstName, lastName, email, username, password) {
        return instance.post ( `auth/signup`, {...arguments} );
    }
=======
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
>>>>>>> 450bdbfc0dd6c89647fdc17b3657ed48ddd4d3ec
};

