import React from "react";
import {withRouter} from "react-router-dom";
import AddColumn from "./AddColumn/AddColumn";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {compose} from "redux";
import {taskMoved} from "../../redux/board-reducer";
import {makeStyles} from "@material-ui/core";
import MemoizedColumn from "./MemoizedColumn/MemoizedColumn";
import {PropTypes} from "prop-types";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex"
    }
}));


const Board = (props) => {
    const classes = useStyles();
    const onDragEnd = (result) => {
        props.taskMoved(result);
    };

    const columns = props.board.columnOrder.map((columnId, index) => {
        const column = props.board.columns[columnId];

        return <MemoizedColumn key={column.id} column={column} taskMap={props.board.tasks}
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
            <AddColumn boardId={props.match.params.boardId}/>
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
});

export default compose(
    withRouter,
    connect(mapStateToProps, {taskMoved})
)(Board);


// onDragStart = (start, provided) => {
//     // provided.announce("Hi");
// };
//
// onDragUpdate = (update, provided) => {
//
// };

// onDragEnd = (result) => {
//     const {destination, source, draggableId, type} = result;
//
//     if (!destination || isEqual(destination, source)) return;
//
//     if(type === "column"){
//         const newColumnOrder = [...this.state.columnOrder];
//         newColumnOrder.splice(source.index, 1);
//         newColumnOrder.splice(destination.index, 0, draggableId);
//
//         const newState = {
//             ...this.state,
//             columnOrder: newColumnOrder,
//         };
//
//         this.setState(newState);
//         return;
//     }
//
//     // console.log(123);
//     const start = this.state.columns[source.droppableId];
//     const finish = this.state.columns[destination.droppableId];
//
//     if (start === finish) {
//         const newTaskIds = [...start.taskIds];
//         newTaskIds.splice(source.index, 1);
//         newTaskIds.splice(destination.index, 0, draggableId);
//
//         const newColumn = {
//             ...start,
//             taskIds: newTaskIds,
//         };
//
//         const newState = {
//             ...this.state,
//             columns: {
//                 ...this.state.columns,
//                 [newColumn.id]: newColumn,
//             }
//         };
//         this.setState(newState);
//         return;
//     }
//
//     //Moving from one list to another
//     const startTaskIds = [...start.taskIds];
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//         ...start,
//         taskIds: startTaskIds,
//     }
//
//     const finishTaskIds = [...finish.taskIds];
//     finishTaskIds.splice(destination.index, 0, draggableId);
//     const newFinish = {
//         ...finish,
//         taskIds: finishTaskIds,
//     }
//
//     const newState = {
//         ...this.state,
//         columns: {
//             ...this.state.columns,
//             [newStart.id]: newStart,
//             [newFinish.id]: newFinish,
//         }
//     }
//     this.setState(newState);
// };