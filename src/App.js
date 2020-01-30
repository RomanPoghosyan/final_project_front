import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        height: "100%"
    }
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Router>
                <Switch>
                    <Route path={"/(sign-in|sign-up)"} render={() => <Auth />} />
                    <Route path={"/"} render={() => <Main />} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;
