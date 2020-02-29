import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./App/app-reducer";
import homeReducer from "./Home/home-reducer";
import userReducer from "./User/user-reducer";
import notifyReducer from "./Notify/notify-reducer";
import dndMiddleware from "./Middlewares/dnd-middleware";
import {USER_LOGOUT} from "./User/action-types";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

let reducers = combineReducers({
    router: connectRouter(history),
    app: appReducer,
    home: homeReducer,
    form: formReducer,
    user: userReducer,
    notify: notifyReducer
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }

    return reducers(state, action)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(dndMiddleware),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history)),
));


window.store = store;
export default store;