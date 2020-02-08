import {projectAPI} from "../API/api";

const SET_PROJECTS = "SET_PROJECTS";

const initialState = {
    projects: [
        {id: 1, title: "Workfront"},
        {id: 2, title: "Some Project"},
        {id: 3, title: "Tesla"},
    ],
};

export const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state
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
}