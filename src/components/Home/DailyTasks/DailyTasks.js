import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import {useDispatch, useSelector} from "react-redux";
import {getDailyTasks} from "../../../redux/Tasks/actions";

const useStyles = makeStyles(theme => ({
    container: {
        margin: "8px",
        padding: "8px",
        border: "1px solid lightgrey",
        borderRadius: "2px",
        width: "220px",
        height: 37,
        display: "flex",
        flexDirection: "column",
    }
}));

/*const dailyTasks = [
    {
        title: "first",
        dueDate: "25/02/2021"
    },
    {
        title: "second",
        dueDate: "26/02/2021"
    },
    {
        title: "third",
        dueDate: "26/02/2021"
    }
];*/

const DailyTasks = () => {
    const classes = useStyles();

    const dailyTasks = useSelector(state => state.home.tasks.dailyTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDailyTasks());
    }, [dispatch]);
    return (
        <List>
            {dailyTasks && dailyTasks.length > 0 ? dailyTasks.map(val => {
                return <div className={classes.container}>{val.title} {val.dueDate}</div>
            }) : null
            }
        </List>
    )
};

export default DailyTasks;