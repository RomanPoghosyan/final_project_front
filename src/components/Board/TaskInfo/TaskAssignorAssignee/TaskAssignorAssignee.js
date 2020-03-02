import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./UserAvatar/UserAvatar";
import AssignTaskForm from "./AssignTaskForm/AssignTaskForm";
import {useDispatch, useSelector} from "react-redux";
import {assignTask} from "../../../../redux/Tasks/actions";
import WithEditMode from "../../../common/WithEditMode/WithEditMode";
import {getUserPrivilegesSelect} from "../../../../redux/Role/role-selectors";
import * as privileges from "../../../../utils/constants/privileges-constants";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    assignorContainer: {
        // paddingTop: 20
        height: 100,
        alignItems: "center"
    },
    container: {
        "& > *": {
            paddingLeft: 0
        }
    }
});


const TaskAssignorAssignee = ({users, assignor, assignee}) => {
    const classes = useStyles();
    const privilegesIds = useSelector(getUserPrivilegesSelect);
    const allowAssignment = privilegesIds.includes(privileges.ASSIGN_TASK_ID);
    const dispatch = useDispatch();
    const onSubmit = (deactivateEditMode) => (formData) => {
        dispatch(assignTask(formData.assigneeId));
        deactivateEditMode();
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={5} className={classes.container}>
                    <UserAvatar title={"Assignor"} classes={classes}>
                        <ListItemText primary={`${assignor.first_name} ${assignor.last_name}`}/>
                    </UserAvatar>
                </Grid>
                <Grid item xs={7}>
                    <UserAvatar title={"Assignee"} classes={classes}>
                        <ListItemText>
                            {/*{assignee*/}
                            {/*    ? `${assignee.first_name} ${assignee.last_name}`*/}
                            {/*    : <AssignTaskForm onSubmit={onSubmit} users={users}/>*/}
                            {/*}*/}
                            <WithEditMode value={assignee}>
                                {(value, editMode, activateEditMode, deactivateEditMode, onValueChange) => (
                                    <>
                                        {(assignee && !editMode) || !allowAssignment
                                            ? <span onClick={activateEditMode}>{assignee ? `${assignee.first_name} ${assignee.last_name}` : "Not assignee"}</span>
                                            : <AssignTaskForm onSubmit={onSubmit(deactivateEditMode)} users={users}/>
                                        }
                                    </>
                                )}
                            </WithEditMode>
                        </ListItemText>
                    </UserAvatar>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskAssignorAssignee;

