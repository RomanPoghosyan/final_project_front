import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Close, NotificationsNone} from "@material-ui/icons";
import StyledMenu from "../../../../utils/styles/StyledMenu";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles ( theme => ({
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
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    notificationButton: {
        width: '40px',
        height: '100%',
        minWidth: '0px',
        padding: '6px 0'
    }
}));

function Notification () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    function handleClose() {
        setAnchorEl(null);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    return (
      <>
          <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
              className={classes.notificationButton}>
              <NotificationsNone />
          </Button>
          <StyledMenu
              type={"notification"}
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
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
                          Нажмите <Link to={"/"}>Просмотреть все</Link>, чтобы просмотреть все уведомления
                      </Typography>
                  </div>
              </section>
          </StyledMenu>
      </>
    );
}

export default Notification;