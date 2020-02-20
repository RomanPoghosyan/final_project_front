import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "white",
        border: "1px solid lightgrey",
        borderRadius: "2px",
        display: "flex",
    },
    isDragging: {
        backgroundColor: "lightgreen",
    }
}));

const Task = (props) => {
    const classes = useStyles();
    return (
        <Draggable draggableId={String(props.task.id)} index={props.index}>
            {
                (provided, snapshot) => (
                    <div className={`${classes.container} ${snapshot.isDragging ? classes.isDragging : ""}`}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        {props.task.title}
                    </div>
                )
            }
        </Draggable>
    )
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default Task;