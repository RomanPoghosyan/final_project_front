import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import {makeStyles} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useSelector} from "react-redux";
import {getBoardUsersSelect, getUserSelect} from "../../../redux/User/selectors";


const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});


const TaskInfo = ({taskInfo}) => {
    const classes = useStyles();
    const users = useSelector(getBoardUsersSelect);
    const assignor = useSelector(getUserSelect(taskInfo.assignorId));

    if(!taskInfo.isFetched) return <p>Patience...</p>;

    return (
        <div>
            <DialogTitle id="form-dialog-title">{taskInfo.title}</DialogTitle>
            <DialogContent>
                <ListItem button>
                    <ListItemText primary={"Assignor"} />
                    <ListItemText primary={"Assignee"} />
                </ListItem>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${assignor.first_name} ${assignor.last_name}`} />
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"Assignee"} />
                </ListItem>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
        </div>
    );
};

export default TaskInfo;