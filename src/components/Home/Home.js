import React from 'react';
import Boards from "./Boards/Boards";
import {makeStyles} from "@material-ui/styles";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles ( theme => ({
    home: {
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        backgroundColor: "#000",
        height: '100%'
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <div />
            <Boards />
            <div />
        </div>
    );
}

export default Home;