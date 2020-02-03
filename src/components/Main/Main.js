import React from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route} from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Home from "../Home/Home";


const useStyles = makeStyles({
    mainWrapper: {
        display: "grid",
        gridTemplateRows: "60px 1fr",
    },
});

const Main = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div className={classes.content}>
                <Route exact path={"/"} component={Home} />
            </div>
        </div>
    );
};


export default Main;