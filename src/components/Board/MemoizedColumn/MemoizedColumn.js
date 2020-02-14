import React from "react";
import Column from "./Column/Column";


const MemoizedColumn = React.memo((props) => {
    const {column, taskMap, index} = props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    const isDropDisabled = index > 1; //some logic to prevent dropping in column
    return <Column column={column} tasks={tasks}
                   isDropDisabled={isDropDisabled} index={index}/>;
});

export default MemoizedColumn;