import React, {useEffect} from "react";
import Dialog from "@material-ui/core/Dialog";
import {useDispatch, useSelector} from "react-redux";
import {push} from 'connected-react-router';
import {withRouter} from "react-router-dom";
import {getCurrentTaskInfo} from "../../../redux/Tasks/actions";
import TaskInfo from "./TaskInfo";

const TaskInfoContainer = (props) => {
    const dispatch = useDispatch();
    const {boardId, taskId} = props.match.params;
    const taskInfo = useSelector(state => state.home.tasks.tasks[taskId]);

    useEffect(() => {
        dispatch(getCurrentTaskInfo(taskId))
    });

    const handleClose = () => {
        dispatch(push(`/board/${boardId}`));
    };

    return (
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <TaskInfo taskInfo={taskInfo} />
        </Dialog>
    )
};

export default withRouter(TaskInfoContainer);