import React, {Suspense} from "react";
import AddColumn from "./AddColumn/AddColumn";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {compose} from "redux";
import {taskMoved} from "../../redux/Board/actions";
import {makeStyles} from "@material-ui/core";
import MemoizedColumn from "./MemoizedColumn/MemoizedColumn";
import {PropTypes} from "prop-types";
import {Route} from "react-router-dom";
const TaskInfoContainer = React.lazy(() => import("./TaskInfo/TaskInfoContainer"));


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
    },
}));


const Board = ({board, tasks, taskMoved}) => {
    const classes = useStyles();

    const onDragEnd = (result) => {
        taskMoved(result);
    };

    if(!board.isFetched) return <p>Loading...</p>

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
            <AddColumn boardId={board.id}/>
            <Route path={"/board/:boardId/task/:taskId"} render={() => <Suspense fallback={""}><TaskInfoContainer /></Suspense>}/>
        </div>
    );
};

Board.propTypes = {
    taskMoved: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    board: state.home.currentBoard,
    tasks: state.home.tasks.tasks,
});

export default compose(
    connect(mapStateToProps, {taskMoved})
)(Board);