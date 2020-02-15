import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Draggable, Droppable} from "react-beautiful-dnd";
import MemoizedTask from "./MemoizedTask/MemoizedTask";


const useStyles = makeStyles(theme => ({
    container: {
        border: "1px solid lightgrey",
        borderRadius: "2px",
        margin: "8px",
        width: "220px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
    },
    title: {
        padding: "8px"
    },
    taskList: {
        padding: "8px",
        transition: "background-color 0.2s ease",
        backgroundColor: "white",
        flexGrow: "1",
        minHeight: "100px"
    },
    isDraggingOver: {
        backgroundColor: "skyblue",
    }
}));




export default function Column(props) {
    const classes = useStyles();

    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <div className={classes.container}
                     {...provided.draggableProps}
                     ref={provided.innerRef}
                >
                    <h3 className={classes.title} {...provided.dragHandleProps}>
                        {props.column.title}
                    </h3>
                    {/*TODO renderProps pattern to allow you create your own nodes*/}
                    <Droppable  droppableId={props.column.id}
                                type={"task"}
                        // type={props.column.id === "column-3" ? "done" : "active"}
                        // isDropDisabled={props.isDropDisabled}
                    >
                        {(provided, snapshot) => (
                            <div className={`${classes.taskList} ${snapshot.isDraggingOver ? classes.isDraggingOver : ""}`}
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                            >
                                <MemoizedTask tasks={props.tasks} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}
