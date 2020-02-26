import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addTask} from "../../../../../redux/Tasks/actions";


const useStyles = makeStyles(() => ({
    container: {
        margin: "8px",
        display: "flex",
        flexDirection: "column",
    },
    // title: {
    //     padding: "8px",
    //     cursor: "pointer",
    // },
    form: {
        display: "grid",
        gridRowGap: "3px",
    },
    input: {
        width: "100%",
        fontSize: "1.17em",
        padding: "8px",
        boxSizing: "border-box",
    },
    buttonGroup: {
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        gridColumnGap: "3px",
    }
}));

const AddTask = ({addTask, columnId}) => {
    const [editMode, setEditMode] = useState(false);
    const classes = useStyles();

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onSubmit = (formData) => {
        addTask(formData.taskName, columnId);
        setEditMode(false);
    } ;


    return (
        <div className={classes.container}>
            {!editMode && <Button onClick={activateEditMode} type={"submit"} color={"secondary"} variant={"contained"} >Add</Button>}
            {editMode && <AddTaskForm onSubmit={onSubmit} deactivateEditMode={deactivateEditMode} classes={classes}/>}
        </div>
    );
};

AddTask.propTypes = {
    columnId: PropTypes.number,
};

export default connect(null, {addTask})(AddTask);
