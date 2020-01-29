import React from 'react';
import Welcome from "./components/Welcome/Welcome";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Route exact path={"/"} render={() => <h1>Main</h1>} />
                <Route path={"/(sign-in|sign-up)"} component={Welcome} />
            </Router>
        </>
    );
}


export default App;
