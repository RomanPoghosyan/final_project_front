import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Draggable, Droppable} from "react-beautiful-dnd";
import MemoizedTask from "./MemoizedTask/MemoizedTask";
import PropTypes from "prop-types";
import AddTask from "./AddTask/AddTask";


const useStyles = makeStyles(theme => ({
    container: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "2px",
        margin: "8px",
        width: "220px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        padding: "8px",
        color: theme.palette.secondary.dark
    },
    taskList: {
        padding: "8px",
        transition: "background-color 0.2s ease",
        flexGrow: "1",
        minHeight: "100px"
    },
    isDraggingOver: {
        backgroundColor: "skyblue",
    }
}));




const Column = (props) => {
    const classes = useStyles();

    return (
        <Draggable draggableId={"column" + props.column.id} index={props.index}>
            {(provided) => (
                <div className={classes.container}
                     {...provided.draggableProps}
                     ref={provided.innerRef}
                >
                    <h3 className={classes.title} {...provided.dragHandleProps}>
                        {props.column.title}
                    </h3>
                    {/*TODO renderProps pattern to allow you create your own nodes*/}
                    <Droppable  droppableId={String(props.column.id)}
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
                    <AddTask columnId={props.column.id}/>
                </div>
            )}
        </Draggable>
    )
};

Column.propTypes = {
    index: PropTypes.number.isRequired,
    column: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
};

export default Column;