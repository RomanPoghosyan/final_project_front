import React, {memo} from "react";
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Logo from "../common/Logo/Logo";
import withAuthentication from "../../hoc/withAuthentication";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
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
});

const Header = ({isAuth}) => {
    const classes = useStyles();
    let logoutButton = null;
    if ( isAuth ) {
        logoutButton = <Button color={'primary'} variant={"contained"}>Log out</Button>;
    }
    return (
        <header className={classes.header}>
            <Logo />
            <div className={classes.auth}>
                {logoutButton ? logoutButton :
                    <>
                        <Link to={"/sign-in"}><Button color={'primary'} variant={"contained"}>Sign in</Button></Link>
                        <Link to={'/sign-up'}><Button color={'primary'} variant={"contained"}>Sign up</Button></Link>
                    </>
                }
            </div>
        </header>
    );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default memo(withAuthentication(Header));