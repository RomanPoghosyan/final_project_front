import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from "../../redux/Notification/actions";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import List from "@material-ui/core/List";
import NotificationItems from "./NotificationItems/NotificationItems";
import NoNotifications from "./NoNotifications/NoNotifications";
import {makeStyles} from "@material-ui/styles";
import {getAllNotifications} from "../../redux/Notification/notification-selectors";

const useStyles = makeStyles(theme => ({
    notifications: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "100%",
    },
}));

/**
 * @return {null}
 */
function AllNotifications() {
    const dispatch = useDispatch();
    const notifications = useSelector(getAllNotifications);
    const classes = useStyles();
    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch]);

    return (
        <div className={classes.notifications}>
            {notifications.length > 0 ?
                <List color={"primary"}>
                    <NotificationItems notifications={notifications}/>
                </List> : <NoNotifications/>}
        </div>
    )
}

export default withAuthRedirect(false)(AllNotifications);