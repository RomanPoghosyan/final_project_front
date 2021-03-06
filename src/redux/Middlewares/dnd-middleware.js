import {isEqual} from "../../utils/helpers/isEqual";
import {columnReordered, taskReordered} from "../Board/actions";
import {boardAPI} from "../../API/api";
import {setNotify} from "../Notify/notify-reducer";
import {TASK_MOVED} from "../Board/action-types";

const dndMiddleware = store => next => action => {
    if (action.type === TASK_MOVED) {
        const state = store.getState().home.currentBoard;
        const {destination, source, draggableId, type} = action.payload;

        if (!destination || isEqual(destination, source)) return;

        // Column reordering
        if(type === "column"){
            const newColumnOrder = [...state.columnOrder];
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, Number(draggableId.replace("column", "")));
            next(columnReordered(newColumnOrder));
            next(reorder("setColumnOrder", {projectId: state.id, columnOrder: newColumnOrder}));
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        // Reorder task in same column
        if (start === finish) {
            const newTaskIds = [...start.taskIds];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            next(taskReordered(start.id, newTaskIds));
            next(reorder("setTaskOrder", {columnId: start.id, taskIds: newTaskIds}));
            return;
        }

        // Reordering from one column to another
        const startTaskIds = [...start.taskIds];
        startTaskIds.splice(source.index, 1);
        next(taskReordered(start.id, startTaskIds));
        next(reorder("setTaskOrder", {columnId: start.id, taskIds: startTaskIds}));

        const finishTaskIds = [...finish.taskIds];
        finishTaskIds.splice(destination.index, 0, draggableId);
        next(taskReordered(finish.id, finishTaskIds));
        next(reorder("setTaskOrder", {columnId: finish.id, taskIds: finishTaskIds}));
    } else {
        return next(action);
    }
};

const reorder = (apiMethodName, requestBody) => dispatch => {
    return boardAPI[apiMethodName](requestBody)
        .catch(({response: {data}}) => {
            dispatch(setNotify({
                open: true, type: 'error', content: `${data.message.length ? data.message :
                    "Something went wrong"}`
            }));
        });
};

export default dndMiddleware;