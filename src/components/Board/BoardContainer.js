import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {compose} from "redux";
import {getBoardData} from "../../redux/Board/actions";
import {makeStyles} from "@material-ui/core";
import {PropTypes} from "prop-types";
import Board from "./Board";
import Panel from "./Panel/Panel";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getBoardUsers} from "../../redux/User/actions";
import {getBoardRoles, getPrivileges} from "../../redux/Role/actions";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: theme.palette.background.main,
        overflowX: "auto"
    }
}));


const BoardContainer = ({match}) => {
    const classes = useStyles();
    const boardId = match.params.boardId;
    const dispatch = useDispatch();
    // const memoizedCallback  = useCallback((boardId) => getBoardData(boardId), [getBoardData]);

    useEffect(() => {
        console.log('aaaaaa');
        dispatch(getBoardData(boardId));
        // dispatch(getBoardUsers(boardId));
        // dispatch(getBoardRoles(boardId));
        // dispatch(getPrivileges());
    }, [dispatch, boardId]);

    return (
        <div className={classes.container}>
            <Panel />
            <Board />
        </div>
    );
};

BoardContainer.propTypes = {
    match: PropTypes.object.isRequired
};


export default compose(
    withRouter,
    // connect(null, {getBoardData}),
    withAuthRedirect(false)
)(BoardContainer);