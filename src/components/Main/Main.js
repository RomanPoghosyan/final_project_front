import React, {memo, Suspense} from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route, Switch} from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Home from "../Home/Home";
import withAuthentication from "../../hoc/withAuthentication";
import PropTypes from 'prop-types';
import AccountSettings from "../AccountSettings/AccountSettings";
import Notify from "../Notify/Notify";
import AllNotifications from "../AllNotifications/AllNotifications";

const BoardContainer = React.lazy(() => import("../Board/BoardContainer"));
const Roles = React.lazy(() => import("../Roles/Roles"));

const useStyles = makeStyles({
    mainWrapper: {
        display: "grid",
        gridTemplateRows: "60px 1fr",
    },
});

const Main = ({isAuth}) => {
    const classes = useStyles();
    const MainContent = isAuth ? Home : Welcome;

    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div className={classes.content}>
                <Switch>
                    <Route exact path={"/"} component={MainContent}/>
                    <Route path={'/account-settings'} component={AccountSettings}/>
                    <Route path={"/roles/:boardId"} render={() => <Suspense fallback={"loadingggg"}><Roles /></Suspense>}/>
                    <Route exact path={"/board/:boardId"} boardId="Number" render={() => <Suspense fallback={"loadingggg"}><BoardContainer /></Suspense>}/>
                    <Route path={"/notifications"} component={AllNotifications}/>
                </Switch>
            </div>
            <Notify />
        </div>
    );
};

Main.propTypes = {
    isAuth: PropTypes.bool.isRequired
};

export default withAuthentication(memo(Main));
