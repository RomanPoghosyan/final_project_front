import React from "react";
import {Link} from "react-router-dom";
import HeaderText from "../../common/HeaderText/HeaderText";
import logo from "../../../assets/images/workfront.png";
import {Button, makeStyles} from "@material-ui/core";
import {PropTypes} from "prop-types";

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
        }
    }
}));


const SignInUpSwitcher = ({location}) => {
    const inSignIn = location === '/sign-in';
    const button = <Button children={inSignIn ? 'Sign Up' : 'Sign In'} variant={"contained"} color={"primary"}/>;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderText element={<img src={logo} alt={"Company logo"}/>}/>
            <div className={classes.link}>
                <Link to={inSignIn ? "/sign-up" : "/sign-in"}>{button}</Link>
            </div>
        </div>
    );
};

SignInUpSwitcher.propTypes = {
    location: PropTypes.string
};

export default SignInUpSwitcher;