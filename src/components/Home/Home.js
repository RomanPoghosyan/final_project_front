import React, {memo} from 'react';
import Boards from "./Boards/Boards";
import {makeStyles} from "@material-ui/styles";
import DailyTasks from "./DailyTasks/DailyTasks";

const useStyles = makeStyles ( (theme) => ({
        home: {
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            height: '100%',
            backgroundColor: theme.palette.secondary.dark
        }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.home} >
            <Boards />
            <DailyTasks/>
        </div>
    );
}

export default memo(Home);