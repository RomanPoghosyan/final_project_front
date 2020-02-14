import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Droppable} from "react-beautiful-dnd";
import MemoizedTask from "./MemoizedTask/MemoizedTask";

const useStyles = makeStyles(theme => ({
    container: {
        margin: "8px",
        border: "1px solid lightgrey",
        borderRadius: "2px",
        width: "220px",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        padding: "8px",
    },
    taskList: {
        padding: "8px",
        transition: "background-color 0.2s ease",
        backgroundColor: "white",
        flexGrow: "1",
        minHeight: "100px",
    },
    isDraggingOver: {
        backgroundColor: "skyblue",
    }
}));



const Column = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{props.column.title}</h3>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <div className={`${classes.taskList} ${snapshot.isDraggingOver ? classes.isDraggingOver : ""}`}
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                    >
                        <MemoizedTask tasks={props.tasks}/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
};

export default Column;
