import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import {makeStyles} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";
import {useSelector} from "react-redux";
import {getBoardUsersSelect, getUserSelect} from "../../../redux/User/user-selectors";
import TaskTitle from "./TaskTitle/TaskTitle";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskAssignorAssignee from "./TaskAssignorAssignee/TaskAssignorAssignee";
import MicroTasks from "./MicroTasks/MicroTasks";
import Spinner from "../../common/Spinners/Spinner/Spinner";


const useStyles = makeStyles({
    taskInfo: {
        width: "550px",
        height: "600px"
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    field: {
        padding: "14px 24px"
    }
});

const TaskInfo = ({taskInfo}) => {
    const classes = useStyles();
    const users = useSelector(getBoardUsersSelect);
    const assignor = useSelector(getUserSelect(taskInfo.assignorId));
    const assignee = useSelector(getUserSelect(taskInfo.assigneeId));

    if (!taskInfo.isFetched)
        return <Spinner size={75}/>;

    return (
        <div className={classes.taskInfo}>
            <TaskTitle title={taskInfo.title}/>
            <DialogContent style={{height: "430px"}}>
                {/*Assignor Assignee*/}
                <TaskAssignorAssignee users={users} assignor={assignor} assignee={assignee} />
                {/*Description*/}
                <TaskDescription description={taskInfo.description}/>
                {/*MicroTasks*/}
                <MicroTasks microTasks={taskInfo.microTasks}/>
            </DialogContent>
        </div>
    );
};

export default TaskInfo;