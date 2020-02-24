import React, {memo} from 'react';
import Boards from "./Boards/Boards";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles ( (theme) => ({
        home: {
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            height: '100%',
            backgroundColor: theme.palette.secondary.dark
        }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.home} >
            <div />
            <Boards />
            <div />
        </div>
    );
}

export default memo(Home);