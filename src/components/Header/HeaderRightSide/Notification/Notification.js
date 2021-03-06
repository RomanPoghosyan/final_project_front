import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {NotificationsNone} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import Badge from "@material-ui/core/Badge";
import NotificationMenu from "./NotificationMenu/NotificationMenu";
import {getAllNotificationsSelect} from "../../../../redux/Notification/notification-selectors";

const useStyles = makeStyles(theme => ({
    notifications: {
        display: "grid",
        gridTemplateRows: "1fr 4fr",
        width: '420px',
    },
    header: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 10px",
    },
    close: {
        justifySelf: "end"
    },
    notificationList: {
        padding: "0 16px",
        backgroundColor: theme.palette.popup.main,
    },
    notificationButton: {
        width: '40px',
        minWidth: '0px',
        padding: '6px 0',
        backgroundColor: theme.palette.secondary.main
    },
    notificationItems: {
        width: '80%',
        margin: 'auto',
    },
    notificationIcon: {
        color: theme.palette.typography.color,
    },
}));

function Notification() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    let notifications = useSelector(getAllNotificationsSelect);
    function handleClose() {
        setAnchorEl(null);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    notifications = notifications.filter( notification => notification.status === 'NOT_SEEN');
    if ( notifications.length > 5 ) {
        notifications = convertToFiveNotification();
    }
    return (
        <>
            <Badge badgeContent={notifications.length} color="error">
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleClick}
                    className={classes.notificationButton}
                >
                    <NotificationsNone className={classes.notificationIcon}/>
                </Button>
            </Badge>
            <NotificationMenu anchorEl={anchorEl} handleClose={handleClose} notifications={notifications}
                              classes={classes}/>
        </>
    );
}

function convertToFiveNotification(notifications) {
    let result = [];
    for ( let i = 0; i < 5; i++ ) {
        result.push(notifications[i]);
    }
    return result;
}

export default Notification;