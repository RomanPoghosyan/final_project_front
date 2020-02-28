import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/styles";
import NotificationItemActions from "./NotificationItemActions/NotificationItemActions";
import PropTypes from 'prop-types';
import AccountIcon from "../../../common/AccountIcon/AccountIcon";


const useStyles = makeStyles(theme => ({
    card: props => ({
        backgroundColor: props.isSeen ? "#66BB6A" : '#fff',
        display: 'grid',
        gridTemplateColumns: "65px 1fr",
        width: '100%',
        color: props.isSeen ? "#fff" : '#000'
    }),
    actions: {
        width: '340px',
    }
}));

function NotificationItem({notification}) {
    const isInvitation = Boolean(notification.invitationStatus);
    const content = isInvitation ?
        ` has invited you to the ${notification.projectName} project!` : ` assigned you ${notification.taskTitle} task`;
    const isSeen = notification.status === 'SEEN';
    const props = {isSeen};
    const classes = useStyles(props);
    const [firstName, lastName] = [notification.notifiedByFirstName, notification.notifiedByLastName];
    return (
        <Card className={classes.card}>
            <CardActions>
                <AccountIcon firstName={firstName} lastName={lastName} />
            </CardActions>
            <CardContent>
                <Typography variant={"h6"} component={"h6"}>
                    {notification.type}
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                >
                    {`${firstName} ${lastName}`}
                </Typography>
                {content}
            </CardContent>
            <NotificationItemActions classes={classes} isSeen={isSeen} isInvitation={isInvitation}
                                     invitationStatus={notification.invitationStatus} id={notification.id}/>
        </Card>
    );
}

NotificationItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationItem;