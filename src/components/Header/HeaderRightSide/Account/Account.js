import React, {useState} from 'react';
import {Fab} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import StyledMenu from "../../../../utils/styles/StyledMenu";
import Typography from "@material-ui/core/Typography";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {logout} from "../../../../redux/auth-reducer";
import {Link} from "react-router-dom";


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
}));

function Account () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const fullName = useSelector(({auth}) => {
        if (auth.firstName)
            return `${auth.firstName} ${auth.lastName}`;
        return '';
    });

    function handleClose() {
        setAnchorEl(null);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    const dispatch = useDispatch();
    return (
        <>
            <Fab
                size="small"
                onClick={handleClick}
                color="secondary"
                aria-label="add">
                {fullName && fullName[0].toUpperCase() + fullName[fullName.indexOf(" ") + 1].toUpperCase()}
            </Fab>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <header className={classes.header}>
                    <Typography variant="h6" component="h6" align={"right"}>
                        {fullName}
                    </Typography>
                    <Close cursor={"pointer"} className={classes.close} onClick={handleClose}/>
                </header>
                <List dense={false}>
                    <ListItem>
                        <Link to={"/accoutSettings"}>
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