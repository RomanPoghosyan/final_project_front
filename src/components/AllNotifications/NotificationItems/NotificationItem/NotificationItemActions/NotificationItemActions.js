import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {setNotificationStatus} from "../../../../../redux/notification-reducer";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';


function NotificationItemActions({classes, isSeen, isInvitation, id}) {
    const dispatch = useDispatch();
    return (
        <CardActions className={classes.actions}>
            {
                isSeen ?
                    <Button color={"inherit"} onClick={() => dispatch(setNotificationStatus(id, false))}>Mark as not seen</Button> :
                    <Button color={"inherit"} onClick={() => dispatch(setNotificationStatus(id, true))}>Mark as
                        seen</Button>
            }
            {
                isInvitation ?
                    <>
                        <Button color={"inherit"}>Accept</Button>
                        <Button color={"inherit"}>Reject</Button></> : null
            }

        </CardActions>
    );
}

NotificationItemActions.propTypes = {
    classes: PropTypes.object.isRequired,
    isSeen: PropTypes.bool.isRequired,
    isInvitation: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default NotificationItemActions;