import React from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import withAuthentication from "../../hoc/withAuthentication";
import Welcome from "../Welcome/Welcome";


const useStyles = makeStyles({
    mainWrapper: {
        display: "grid",
        gridTemplateRows: "60px 1fr",
    },
});

const Main = (props) => {
    const classes = useStyles();
    const MainContent = props.isAuth ? Home : Welcome;

    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div className={classes.content}>
                <Route exact path={"/"} component={MainContent} />
            </div>
        </div>
    );
};


export default withAuthentication( Main );