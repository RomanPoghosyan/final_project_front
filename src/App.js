import React from 'react';
import Welcome from "./components/Welcome/Welcome";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <Router>
                <Route exact path={"/"} component={Main} />
                <Route path={"/(sign-in|sign-up)"} component={Welcome} />
            </Router>
        </>
    );
}


export default App;
