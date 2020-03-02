import React from "react";
import {Link} from "react-router-dom";
import HeaderText from "../../common/HeaderText/HeaderText";
import {Button, makeStyles} from "@material-ui/core";
import {PropTypes} from "prop-types";
import Logo from "../../common/Logo/Logo";
import logoImg from '../../../assets/images/logoMedium.png';


const useStyles = makeStyles(theme => ({
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
    switcher: {
        backgroundColor: theme.palette.auth.secondary.main,
        color: "#fff",
        '&:hover': {
            backgroundColor: theme.palette.auth.secondary.dark,
        }
    }
}));


const SignInUpSwitcher = ({location}) => {
    const inSignIn = location === '/sign-in';
    const logoElement =  <Link to={'/'}><Logo img={logoImg} /></Link>;
    const classes = useStyles();
    const button = <Button children={inSignIn ? 'To Sign Up' : 'To Sign In'} variant={"contained"} className={classes.switcher}/>;
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