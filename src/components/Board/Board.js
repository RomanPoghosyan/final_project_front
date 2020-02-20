import React, {useCallback, useEffect} from "react";
import {withRouter} from "react-router-dom";
import AddColumn from "./AddColumn/AddColumn";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {compose} from "redux";
import {getBoardData, taskMoved} from "../../redux/board-reducer";
import {makeStyles} from "@material-ui/core";
import MemoizedColumn from "./MemoizedColumn/MemoizedColumn";
import {PropTypes} from "prop-types";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex"
    }
}));


const Board = ({board, tasks, match, taskMoved, getBoardData}) => {
    const classes = useStyles();
    const boardId = match.params.boardId;

    const memoizedCallback  = useCallback((boardId) => getBoardData(boardId), [getBoardData]);

    useEffect(() => {
        memoizedCallback(boardId);
    }, [memoizedCallback, boardId]);

    const onDragEnd = (result) => {
        taskMoved(result);
    };

    if(!board.isFetched) return <p>Loasding...</p>

    const columns = board.columnOrder.map((columnId, index) => {
        const column = board.columns[columnId];

        return <MemoizedColumn key={column.id} column={column} taskMap={tasks}
                          index={index}/>;
    });

    return (
        <div className={classes.container}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={"all-columns"} direction={"horizontal"} type={"column"}>
                    {(provided) => (
                        <div className={classes.container}
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                        >
                            {columns}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <AddColumn boardId={boardId}/>
        </div>
    );
};

Board.propTypes = {
    taskMoved: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    board: state.home.currentBoard,
    tasks: state.home.tasks.tasks,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {taskMoved, getBoardData})
)(Board);