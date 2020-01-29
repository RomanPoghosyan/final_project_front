import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import SignInUpSwitcher from "./SignInUpSwitcher/SignInUpSwitcher";
import {withRouter} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "1rem",
        background: "linear-gradient(90deg, rgba(12,172,163,1) 0%, rgba(0,212,255,1) 100%)",
        height: "100%"
    },
});

const Welcome = ({location: {pathname}}) => {
    console.log(window.innerWidth);
    const classes = useStyles();
    const [location, setLocation] = useState(pathname);

    useEffect(() => {
        setLocation(pathname);
    }, [pathname]);

    return (
        <div className={classes.root}>
            {location === "/sign-in" ? <SignIn/> : <SignUp/>}
            <SignInUpSwitcher location={location} />
        </div>
    );
};

export default withRouter(Welcome);