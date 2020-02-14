import React, {useState} from 'react';
import {Fab} from '@material-ui/core';
import StyledMenu from "../../../../utils/styles/StyledMenu";
import Typography from "@material-ui/core/Typography";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {logout} from "../../../../redux/auth-reducer";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
    header: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 10px",
        width: "200px"
    },
    close: {
        justifySelf: "end"
    },
    link: {
        cursor: "pointer",
        textDecoration: 'none',
        color: '#000'
    },
    accountIcon: {
        width: '40px',
        height: '100%',
        minWidth: '0px',
        padding: '9px 0'
    }
}));

function Account () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    function handleClose() {
        setAnchorEl(null);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    return (
        <>
            <Fab
                className={classes.accountIcon}
                size="small"
                onClick={handleClick}
                color="secondary"
                aria-label="add">
                {'ll'}
            </Fab>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className={classes.header}>
                    <Typography variant="h6" component="h6" align={"right"}>
                        {'literal'}
                    </Typography>
                    <Close cursor={"pointer"} className={classes.close} onClick={handleClose}/>
                </div>
                <List dense={false}>
                    <ListItem>
                        <Link to={"/accountSettings"}>
                            <ListItemText className={classes.link} primary={"Account"} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={"/"}>
                            <ListItemText className={classes.link} primary={"Boards"} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={classes.link} primary={"Log out"} onClick={() => dispatch(logout())}/>
                    </ListItem>
                </List>
            </StyledMenu>
        </>
    )
}

export default Account;