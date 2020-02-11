import React, {useEffect} from 'react';
import {connect} from "react-redux";
import BoardItem from "./BoardItem/BoardItem";
import {List, makeStyles} from "@material-ui/core";
import {getBoards} from "../../../redux/boards-reducer";
import {PropTypes} from "prop-types";
import AddBoard from "./BoardItem/AddBoard/AddBoard";


const useStyles = makeStyles ( theme => ({
    boards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(110px, 1fr))",
        gridGap: '10px',
        "& > *": {
            cursor: "pointer"
        }
    },
    board : {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "f###",
        cursor: "pointer",
        borderRadius: "3px",
    }
}));

function Boards(props) {
    const classes = useStyles();

    useEffect(() => {
        if(props.userId) props.getBoards(props.userId);
    }, [props.userId]);


    const boards = props.boards.map ( (b) => {
        return <BoardItem key={b.id} board={b}/>
    });

    return (
        <List className={classes.boards}>
            {boards}
            <AddBoard/>
        </List>
    );
}

Boards.prototype = {
    getBoards: PropTypes.func,
    boards: PropTypes.array,
    userId: PropTypes.number,
};

let mapStateToProps = (state) => ({
    boards: state.home.boards,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, {getBoards})(Boards);




