import React from "react";
import Column from "./Column/Column";
import PropTypes from 'prop-types';


const MemoizedColumn = React.memo((props) => {
    const {column, taskMap, index} = props;
    console.log("MEMO ", column.id);
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    const isDropDisabled = index > 1; //some logic to prevent dropping in column
    return <Column column={column} tasks={tasks}
                   isDropDisabled={isDropDisabled} index={index}/>;
});
//    const {column, taskMap, index} = props;
MemoizedColumn.propTypes = {
    index: PropTypes.number.isRequired,
    column: PropTypes.object.isRequired,
    taskMap: PropTypes.object.isRequired,
};

export default MemoizedColumn;