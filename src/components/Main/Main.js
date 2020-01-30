import Header from "../Header/Header";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Route} from "react-router-dom";


const useStyles = makeStyles({
});

const Main = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div className={classes.content}>
                <Route exact path={"/"} render={() => <h1>Main</h1>} />
            </div>
        </div>
    );
};

export default Main;