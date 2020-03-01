import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BoardItem from "./BoardItem/BoardItem";
import {List, makeStyles} from "@material-ui/core";
import {getBoardsSelect} from "../../../redux/Boards/boards-selectors";
import PropTypes from "prop-types";
import AddBoard from "./BoardItem/AddBoard/AddBoard";
import {getUserId} from "../../../redux/User/user-selectors";
import {getBoards} from "../../../redux/Boards/actions";


const useStyles = makeStyles ( theme => ({
    boards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(110px, 1fr))",
        gridGap: '10px',
        "& > *": {
            cursor: "pointer",
            backgroundColor: theme.palette.secondary.main
        }
    },
}));

function Boards() {
    const classes = useStyles();
    const boards = useSelector(getBoardsSelect);
    const userId = useSelector(getUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) dispatch(getBoards(userId));
    }, [userId, dispatch]);

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

export default Boards;




