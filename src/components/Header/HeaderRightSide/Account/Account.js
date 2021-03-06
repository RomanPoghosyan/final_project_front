import React, {useState} from 'react';
import StyledMenu from "../../../../utils/styles/StyledMenu";
import Typography from "@material-ui/core/Typography";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {logout} from "../../../../redux/User/actions";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AccountIcon from "../../../common/AccountIcon/AccountIcon";
import {getFullName} from "../../../../redux/User/user-selectors";

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
    styledMenu: {
        backgroundColor: theme.palette.popup.main,
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

    const [firstName, lastName] = useSelector(getFullName);
    return (
        <>
            <AccountIcon onClick={handleClick} firstName={firstName} lastName={lastName} backgroundColor={"secondary"} height={"36px"} />
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className={classes.header}>
                    <Typography variant="h6" component="h6" align={"right"}>
                        {`${firstName} ${lastName}`}
                    </Typography>
                    <Close cursor={"pointer"} className={classes.close} onClick={handleClose}/>
                </div>
                <List dense={false} className={classes.styledMenu}>
                    <ListItem>
                        <Link to={"/account-settings"} onClick={handleClose}>
                            <ListItemText className={classes.link} primary={"Account"} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={"/"} onClick={handleClose}>
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