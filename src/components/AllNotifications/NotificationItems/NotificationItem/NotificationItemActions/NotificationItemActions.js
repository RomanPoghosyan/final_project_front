import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {replyToInvitation, setNotificationStatus} from "../../../../../redux/Notification/actions";
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';


function NotificationItemActions({classes, isSeen, isInvitation, invitationStatus, id}) {
    const dispatch = useDispatch();
    return (
        <CardActions className={classes.actions}>
            {
                isSeen ?
                    <Button color={"secondary"} onClick={() => dispatch(setNotificationStatus(id, false))}>Mark as not
                        seen</Button> :
                    <Button color={"secondary"} onClick={() => dispatch(setNotificationStatus(id, true))}>Mark as
                        seen</Button>
            }
            {
                isInvitation ?
                    (invitationStatus === "PENDING" ?
                        <>
                            <Button color={"secondary"}
                                    onClick={() => dispatch(replyToInvitation(id, true))}>Accept</Button>
                            <Button color={"secondary"}
                                    onClick={() => dispatch(replyToInvitation(id, false))}>Reject</Button></>
                        :
                        <Button disabled color={"secondary"}>{invitationStatus}</Button>)
                    : null

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