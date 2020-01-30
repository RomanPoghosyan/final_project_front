import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";

// Not  in SignIn or SignUp
const notInSignInOrSignUp = /^(?!.*(\/(sign-in|sign-up))).*$/;

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
                <Route path={"/(sign-in|sign-up)"} render={() => <Auth />} />
                <Route path={notInSignInOrSignUp} render={() => <Main />} />
            </Router>
        </div>
    );
}


export default App;
