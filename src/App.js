import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {history} from "./redux/store";
import theme from "./utils/styles/theme";
import {initialize} from './redux/App/actions';
import {ConnectedRouter} from 'connected-react-router'
import {getInitializedSelect} from "./redux/App/app-selectors";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%",
        minWidth: 0
    }
});


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialized = useSelector(getInitializedSelect);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    if (!initialized) return <div>Loading...</div>;

    return (
        <div className={classes.wrapper}>
            <Switch>
                <Route path={"/(sign-in|sign-up)"} component={Auth}/>
                <Route component={Main}/>
            </Switch>
        </div>
    );
};


const AppContainer = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </ThemeProvider>
        </Provider>
    );
};


export default AppContainer;
