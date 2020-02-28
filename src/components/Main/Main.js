import React, {memo, Suspense, useEffect} from "react";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/styles";
import {Route, Switch} from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Home from "../Home/Home";
import withAuthentication from "../../hoc/withAuthentication";
import PropTypes from 'prop-types';
import AccountSettings from "../AccountSettings/AccountSettings";
import Notify from "../Notify/Notify";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentFbToken, requestPermission, setFbToken} from "../../redux/User/actions";

const BoardContainer = React.lazy(() => import("../Board/BoardContainer"));
const Roles = React.lazy(() => import("../Roles/Roles"));
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
    const fbToken = useSelector(state => state.user.currentUser.fbToken);
    const dispatch = useDispatch();
    useEffect(() => {
            if ( isAuth && !fbToken ) {
                dispatch(requestPermission());
            }
    }, [dispatch]);

    return (
        <div className={classes.mainWrapper}>
            <Header/>
            <div>
                <Switch>
                    <Route exact path={"/"} component={MainContent}/>
                    <Route path={'/account-settings'} component={AccountSettings}/>
                    <Route path={"/roles/:boardId"} render={() => <Suspense fallback={"loading"}><Roles /></Suspense>}/>
                    <Route exact path={"/board/:boardId"} boardId="Number" render={() => <Suspense fallback={"loading"}><BoardContainer /></Suspense>}/>
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
