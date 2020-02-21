import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from "../../redux/notification-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import List from "@material-ui/core/List";
import NotificationItems from "./NotificationItems/NotificationItems";

function AllNotifications () {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.home.notification);
    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch]);

    return (
        notifications.length > 0 ?
            <List>
                <NotificationItems notifications={notifications} />
            </List> : null
    )
}

export default withAuthRedirect(false)(AllNotifications);