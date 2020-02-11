import React, {memo, useCallback, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import {Provider, useSelector, useDispatch} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import {initializedSuccess} from "./redux/app-reducer";
import theme from "./utils/styles/theme";
import {ThemeProvider} from "@material-ui/styles";
import PropTypes from "prop-types";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%"
    }
});


const App = (props) => {
    const classes = useStyles();
    const initialize = useDispatch();
    const memoizedCallback  = useCallback(() => initialize(initializedSuccess()), [props]);
    const initialized = useSelector(state => state.app.initialized);
    useEffect(() => {
        memoizedCallback();
    }, [memoizedCallback]);

    if(!initialized) return <div>Loading...</div>;

    return (
        <div className={classes.wrapper}>
            <Switch>
                <Route path={"/(sign-in|sign-up)"} component={Auth} />
                <Route component={Main} />
            </Switch>
        </div>
    );
};


const AppWithData = compose(
    withRouter,
)(memo(App));

const AppContainer = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <AppWithData/>
                </Provider>
            </ThemeProvider>
        </Router>
    );
};


export default AppContainer;
