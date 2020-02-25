import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Logo from "../common/Logo/Logo";
import PropTypes from 'prop-types';
import {compose} from "redux";
import {connect} from "react-redux";
import HeaderRightHand from "./HeaderRightSide/HeaderRightSide";

const useStyles = makeStyles(theme => ({
    header: {
        display: "grid",
        gridTemplateColumns: "50px minmax(200px, 1fr)",
        padding: '5px',
        backgroundColor: theme.palette.secondary.light
    },
    auth: {
        justifySelf: "end",
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'baseline',
        gridGap: '10px',
    },
    link: {
      textDecoration: "none"
    },
}));

const Header = ({isAuth}) => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Link to={"/"}><Logo /></Link>
            <div className={classes.auth}>
                {!isAuth && <>
                    <Link className={classes.link} to={"/sign-in"}><Button variant={"contained"} color={"primary"} >Sign in</Button></Link>
                    <Link className={classes.link} to={'/sign-up'}><Button variant={"contained"} color={"primary"}>Sign up</Button></Link>
                </>}
                {isAuth && (
                    <HeaderRightHand/>
                )}

            </div>
        </header>
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.user.currentUser.isAuth
    };
};

export default compose(
    connect(mapStateToProps, null)
)(Header);