import React from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route} from "react-router-dom";
import Welcome from "../Welcome/Welcome";


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
                <Route exact path={"/"} render={() => <Welcome />} />
            </div>
        </div>
    );
};


export default Main;