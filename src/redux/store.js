import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import homeReducer from "./home-reducer";
import userReducer, {USER_LOGOUT} from "./user-reducer";
import notifyReducer from "./notify-reducer";
import dndMiddleware from "./dnd-middleware";

let reducers = combineReducers({
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
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(dndMiddleware),
    applyMiddleware(thunkMiddleware),
));


window.store = store;
export default store;