import {rolesAPI} from "../API/api";


const SET_ROLES = "SET_ROLES";


const initialState = [];

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLES:
            return [
                ...action.payload,
            ]
        default:
            return state;
    }
};

export const setBoardRoles = roles => ({type: SET_ROLES, payload: roles});

export const getBoardRoles = boardId => dispatch => {
    rolesAPI.getRoles(boardId)
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setBoardRoles(data.body));
            }
        })
};


export default roleReducer;