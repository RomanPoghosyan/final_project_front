import React from "react";
import Task from "./Task/Task";
import PropTypes from 'prop-types';


const MemoizedTask = React.memo((props) => {
    return props.tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index}/>
    ))
});

MemoizedTask.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default MemoizedTask;