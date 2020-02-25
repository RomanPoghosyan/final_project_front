import React, {useCallback, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import theme from "./utils/styles/theme";
import {initialize} from './redux/App/actions';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%"
    }
});


const App = ({initialized, initialize}) => {
    const classes = useStyles();
    const memoizedCallback  = useCallback(() => initialize(), [initialize]);
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

App.propTypes = {
    initialized: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
};

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppWithData = compose(
    withRouter,
    connect(mapStateToProps, {initialize})
)(App);

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
