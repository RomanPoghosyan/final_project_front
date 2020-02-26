const NOTIFY = 'NOTIFY';

const initialState = {
    open: false,
    type: 'success',
    content: ''
};

/**
 *
 * notifyReducer ( should return new state for notifyReducer )
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {{type: string, open: boolean, content: string}}
 */

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

/**
 *
 * setNotify ( should return action with type NOTIFY when notifying is needed )
 *
 * @param {Object} notification
 * @returns {{payload: Object, type: string}}
 */

export const setNotify = (notification) => {
    return {
        type: NOTIFY,
        payload: notification
    }
};

export default notifyReducer;