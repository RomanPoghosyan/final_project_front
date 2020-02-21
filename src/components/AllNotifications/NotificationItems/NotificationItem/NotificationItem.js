import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import NotificationItemActions from "./NotificationItemActions/NotificationItemActions";
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    card: props => ({
        backgroundColor: props.isSeen ? "#66BB6A" : '#fff',
        display: 'grid',
        gridTemplateColumns: "65px 1fr",
        width: '100%',
        color: props.isSeen ? "#fff" : '#000'
    }),
    accountIcon: {
        width: '40px',
        minWidth: '0px',
        padding: '6px 0'
    },
    actions: {
        width: '340px',
    }
}));

function NotificationItem({notification}) {
        const isInvitation = Boolean(notification.invitationStatus);
    const content = isInvitation ?
        ` has invited you to the ${notification.projectName} project!` : ` assigned you ${notification.taskTitle} task`;
    const isSeen = notification.status === 'SEEN';
    const props = { isSeen };
    const classes = useStyles(props);
    const fullName = [notification.notifiedByFirstName, notification.notifiedByLastName];
    return (
        <Card className={classes.card}>
            <CardActions>
                <Button
                    className={classes.accountIcon}
                    variant="contained"
                    aria-label="add">{fullName[0][0] + fullName[1][0]}</Button>
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
                    {`${fullName[0]} ${fullName[1]}`}
                </Typography>
                {content}
            </CardContent>
            <NotificationItemActions classes={classes} isSeen={isSeen} isInvitation ={isInvitation} id={notification.id} />
        </Card>
    );
}

NotificationItem.propTypes = {
    notification: PropTypes.object.isRequired
};

export default NotificationItem;