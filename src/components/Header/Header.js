import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Logo from "../common/Logo/Logo";
import PropTypes from 'prop-types';
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

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
    sign: {
        color: theme.palette.secondary.dark
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Logo />
            <div className={classes.auth}>
                {!props.isAuth && <>
                    <Link to={"/sign-in"}><Button variant={"contained"} className={classes.sign}>Sign in</Button></Link>
                    <Link to={'/sign-up'}><Button variant={"contained"} className={classes.sign}>Sign up</Button></Link>
                </>}
                {props.isAuth && (
                    <Button className={classes.sign} variant={"contained"} onClick={props.logout}>Log out</Button>
                )}

            </div>
        </header>
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired
};



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {logout})
)(Header);