import React from "react";
import {Link} from "react-router-dom";
import HeaderText from "../../common/HeaderText/HeaderText";
import {Button, makeStyles} from "@material-ui/core";
import {PropTypes} from "prop-types";
import Logo from "../../common/Logo/Logo";

const useStyles = makeStyles(() => ({
    root: {
        display: "grid",
        justifyItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gridTemplateRows: "2fr 3fr",
        gridAutoColumns: "70%",
    },
    link: {
        "& > *":{
            textDecoration: "none"
        },
    },
}));


const SignInUpSwitcher = ({location}) => {
    const inSignIn = location === '/sign-in';
    const button = <Button children={inSignIn ? 'To Sign Up' : 'To Sign In'} variant={"contained"} color={"secondary"}/>;
    const logoElement =  <Link to={'/'}><Logo /></Link>;
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <HeaderText element={logoElement}/>
            <div className={classes.link}>
                <Link to={inSignIn ? "/sign-up" : "/sign-in"}>{button}</Link>
            </div>
        </div>
    );
};

SignInUpSwitcher.propTypes = {
    location: PropTypes.string.isRequired
};

export default SignInUpSwitcher;