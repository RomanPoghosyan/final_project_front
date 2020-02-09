import {projectAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_PROJECTS = "SET_PROJECTS";
const ADD_PROJECT = "ADD_PROJECT";

const initialState = {
    projects: [
        {id: 1, name: "Workfront"},
        {id: 2, name: "Some Project"},
        {id: 3, name: "Tesla"},
    ],
};

export const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                // projects: [...action.payload]
            };
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            };
        default:
            return state;
    }
};

export const setProjects = (projects) => ({type: SET_PROJECTS, payload: projects});

export const getProjects = (userId) => (dispatch) => {
    projectAPI.getAllByUserId(userId)
        .then(({data}) => {
            dispatch(setProjects(data.body));
        })
};

export const addProjectSuccess = (project) => ({type: ADD_PROJECT, payload: project});

export const addProject = (project) => (dispatch) => {
    projectAPI.addProject(project)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(addProjectSuccess(data.body));
            }
        })
        .catch(({response: {data}}) => {
            let message = data.messages.length > 0 ? data.messages[0] : "Something went wrong";
            dispatch(stopSubmit("addBoard", {_error: message}));
        });
};


