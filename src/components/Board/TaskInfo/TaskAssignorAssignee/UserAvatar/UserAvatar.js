import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';

const UserAvatar = ({title, fullName, classes, children}) => {
    return (
        <>
            <ListItem button>
                <ListItemText primary={title}/>
            </ListItem>
            <ListItem className={classes.assignorContainer}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <PersonIcon/>
                    </Avatar>
                </ListItemAvatar>
                {children}
            </ListItem>
        </>
    );
};

export default UserAvatar;