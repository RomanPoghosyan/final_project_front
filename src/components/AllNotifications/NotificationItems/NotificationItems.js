import React from 'react';
import NotificationItem from "./NotificationItem/NotificationItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
   item: {
       width: '100%'
   }
});

function NotificationItems({notifications}) {
    const classes = useStyles();
    return (
        <List>
            {
                notifications.length > 0 ? notifications.map(val => {
                    return <ListItem key={val.id} className={classes.item}>
                        <NotificationItem notification={val}/>
                    </ListItem>
                }) : null
            }
        </List>
    )
}

NotificationItems.propTypes = {
  notifications: PropTypes.array.isRequired
};

export default NotificationItems;