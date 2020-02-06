import React, {memo} from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route} from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Home from "../Home/Home";
import withAuthentication from "../../hoc/withAuthentication";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    mainWrapper: {
        display: "grid",
        gridTemplateRows: "60px 1fr",
    },
});

const Main = ({isAuth}) => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div className={classes.content}>
                <Route exact path={"/"} component={isAuth ? Home : Welcome} />
            </div>
        </div>
    );
};

Main.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default memo(withAuthentication(Main));