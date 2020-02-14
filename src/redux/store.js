import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import homeReducer from "./home-reducer";
import userReducer from "./user-reducer";


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    home: homeReducer,
    form: formReducer,
    user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));



window.store = store;
export default store;