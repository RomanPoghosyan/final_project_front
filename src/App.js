import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import {Provider, connect} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%"
    }
});

const theme = createMuiTheme({
    palette: {
        typography: {
            color: '#fff',
        },
        primary: {
            main: "#dedede",
        },
        secondary: {
            main: "#3f3f4b",
            dark: "#3f51b5",
        },
        text: {
            color: '#fff',
        },
        textColor: '#fff',
        root: {
            textDecoration: 'none',
        },
    }
});

const App = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.initialize();
    }, []);

    if (!props.initialized) return <div>Loading...</div>;

    return (
        <div className={classes.wrapper}>
            <Switch>
                <Route path={"/(sign-in|sign-up)"} component={Auth}/>
                <Route path={"/"} component={Main}/>
            </Switch>
        </div>
    );
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
