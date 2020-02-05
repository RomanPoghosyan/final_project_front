import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
});

const store = createStore(reducers);


window.store = store;
export default store;