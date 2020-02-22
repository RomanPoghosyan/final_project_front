import React, {useCallback, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getBoardData} from "../../redux/board-reducer";
import {makeStyles} from "@material-ui/core";
import {PropTypes} from "prop-types";
import Board from "./Board";
import Panel from "./Panel/Panel";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
    }
}));


const BoardContainer = ({match, getBoardData}) => {
    const classes = useStyles();
    const boardId = match.params.boardId;

    const memoizedCallback  = useCallback((boardId) => getBoardData(boardId), [getBoardData]);

    useEffect(() => {
        memoizedCallback(boardId);
    }, [memoizedCallback, boardId]);

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
    connect(null, {getBoardData})
)(BoardContainer);