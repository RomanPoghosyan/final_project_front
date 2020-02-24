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

const BoardContainer = React.lazy(() => import("../Board/BoardContainer"));
const AllNotifications = React.lazy(() => import("../AllNotifications/AllNotifications"));
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
            <div>
                <Switch>
                    <Route exact path={"/"} component={MainContent}/>
                    <Route path={'/account-settings'} component={AccountSettings}/>
                    <Route path={"/board/:boardId"} render={() => <Suspense fallback={"loadingggg"}><BoardContainer /></Suspense>}/>
                    <Route path={"/notifications"} render={() => <Suspense fallback={"loading"}><AllNotifications/></Suspense> }/>
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
