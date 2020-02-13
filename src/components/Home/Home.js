import React, {memo} from 'react';
import Boards from "./Boards/Boards";
import {makeStyles} from "@material-ui/styles";
import {useDispatch} from "react-redux";
import {addTask, addTaskAction} from "../../redux/tasks-reducer";

const useStyles = makeStyles ( (theme) => ({
        home: {
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            height: '100%',
            backgroundColor: theme.palette.primary.main
        }
}));

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.home} >
            <div />
            <Boards />
            <div />
            <button onClick={() =>  {
                console.log("does");
                dispatch(addTask({ title: "Hello world", description: "wORLD hEllo", "project_id": "1", "assignee_id": "1", "assignor":"1" } ))
            }}>Click please</button>
        </div>
    );
}

export default memo(Home);