const NOTIFY = 'NOTIFY';

const initialState = {
    open: false,
    type: 'success',
    content: ''
};

const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFY:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export const setNotify = (notification) => {
    return {
        type: NOTIFY,
        payload: notification
    }
};

export default notifyReducer;