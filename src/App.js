import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import {Provider} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%"
    }
});

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Switch>
                <Route path={"/(sign-in|sign-up)"} component={Auth} />
                <Route path={"/"} component={Main} />
            </Switch>
        </div>
    );
};


const AppWithData = compose(
    withRouter
)(App);

const AppContainer = () => {
    return (
        <Router>
            <Provider store={store}>
                <AppWithData />
            </Provider>
        </Router>
    );
};



export default AppContainer;
