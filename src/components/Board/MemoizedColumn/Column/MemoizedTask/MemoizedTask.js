import React from "react";
import Task from "./Task/Task";


const MemoizedTask = React.memo((props) => {
    return props.tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index}/>
    ))
});

export default MemoizedTask;