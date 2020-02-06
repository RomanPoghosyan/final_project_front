import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import SignInUpSwitcher from "./SignInUpSwitcher/SignInUpSwitcher";
import {PropTypes} from "prop-types";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "1rem",
        background: "#dedede",
        height: "100%",
        color: "#3f3f4b",
        "& button": {
            backgroundColor: "#3f3f4b"
        }
    },
});

const Auth = ({location: {pathname}}) => {
    const classes = useStyles();
    const [location, setLocation] = useState(pathname);

    useEffect(() => {
        setLocation(pathname);
    }, [pathname]);


    return (
        <div className={classes.root}>
            {location === "/sign-in" ? <SignIn/> : <SignUp/>}
            <SignInUpSwitcher location={location}/>
        </div>
    );
};

Auth.propTypes = {
  location: PropTypes.object.isRequired
};

export default compose(
    withAuthRedirect(true)
)(Auth);