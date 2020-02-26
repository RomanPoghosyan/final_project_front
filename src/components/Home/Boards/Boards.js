import React, {useCallback, useEffect} from 'react';
import {connect} from "react-redux";
import BoardItem from "./BoardItem/BoardItem";
import {List, makeStyles} from "@material-ui/core";
import {getBoards} from "../../../redux/Boards/boards-reducer";
import {PropTypes} from "prop-types";
import AddBoard from "./BoardItem/AddBoard/AddBoard";


const useStyles = makeStyles ( theme => ({
    boards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(110px, 1fr))",
        gridGap: '10px',
        "& > *": {
            cursor: "pointer",
            backgroundColor: theme.palette.primary.main
        }
    },
}));

function Boards({userId, boards, getBoards}) {
    const classes = useStyles();
    const memoizedGetBoards = useCallback(() => getBoards(userId), [userId, getBoards]);


    useEffect(() => {
        if(userId) memoizedGetBoards(userId);
    }, [userId, memoizedGetBoards]);


    const boardList = boards.map ( (b) => {
        return <BoardItem key={b.id} board={b}/>
    });

    return (
        <List className={classes.boards}>
            {boardList}
            <AddBoard/>
        </List>
    );
}

Boards.propTypes = {
    getBoards: PropTypes.func,
    boards: PropTypes.array,
    userId: PropTypes.number,
};

let mapStateToProps = (state) => ({
    boards: state.home.boards,
    userId: state.user.currentUser.id,
});

export default connect(mapStateToProps, {getBoards})(Boards);




