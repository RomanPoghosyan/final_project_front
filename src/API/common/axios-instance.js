import * as axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080/api/1.0/",
    headers: {
        "Content-Type": "application/json",
    }
});