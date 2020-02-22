import React from 'react';
import NotificationItems from "../../../../AllNotifications/NotificationItems/NotificationItems";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {Close} from "@material-ui/icons";
import StyledMenu from "../../../../../utils/styles/StyledMenu";
import PropTypes from 'prop-types';


function NotificationMenu({anchorEl, notifications, classes, handleClose}) {
    return (
        <StyledMenu
            type={"notification"}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {notifications.length > 0 ?
                <div className={classes.notificationItems} >
                    <NotificationItems notifications={notifications}/>
                    <Link to={"/all-notifications"} onClick={handleClose}>Просмотреть все</Link>
                </div>
                :
                <section className={classes.notifications}>
                    <div className={classes.header}>
                        <Typography variant="h6" component="h6" align={"right"}>
                            Notifications
                        </Typography>
                        <Close cursor={"pointer"} className={classes.close} onClick={handleClose}/>
                    </div>
                    <div className={classes.notificationList}>
                        <Typography variant={"subtitle2"}>
                            Нет непрочитанных уведомлений
                            Нажмите <Link onClick={handleClose} to={"/notifications"}>Просмотреть все</Link>, чтобы просмотреть все уведомления
                        </Typography>
                    </div>
                </section>
            }
        </StyledMenu>
    );
}

NotificationMenu.propTypes = {
  anchorEl: PropTypes.object || null,
  notifications: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default NotificationMenu;