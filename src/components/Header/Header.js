import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Logo from "../common/Logo/Logo";
import PropTypes from 'prop-types';
import {compose} from "redux";
import {connect} from "react-redux";
import HeaderRightSide from "./HeaderRightSide/HeaderRightSide";

const useStyles = makeStyles(theme => ({
    header: {
        display: "grid",
        gridTemplateColumns: "50px minmax(200px, 1fr)",
        padding: '5px',
    },
    auth: {
        justifySelf: "end",
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'baseline',
    },
    link: {
      textDecoration: "none"
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Link to={"/"}><Logo /></Link>
            <div className={classes.auth}>
                {!props.isAuth && <>
                    <Link className={classes.link} to={"/sign-in"}><Button variant={"contained"} color={"primary"} >Sign in</Button></Link>
                    <Link className={classes.link} to={'/sign-up'}><Button variant={"contained"} color={"primary"}>Sign up</Button></Link>
                </>}
                {props.isAuth && (
                    <HeaderRightSide />
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
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps)
)(Header);