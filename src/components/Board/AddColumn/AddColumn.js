import React, {useState} from "react";
import AddColumnForm from "./AddColumnForm/AddColumnForm";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {addColumn} from "../../../redux/board-reducer";
import PropTypes from 'prop-types';


const useStyles = makeStyles(() => ({
    container: {
        margin: "8px",
        border: "1px solid lightgrey",
        borderRadius: "2px",
        width: "220px",
        height: 37,
        display: "flex",
        flexDirection: "column",
    },
    title: {
        padding: "8px",
        cursor: "pointer",
    },
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

const AddColumn = ({boardId, addColumn}) => {
    const [editMode, setEditMode] = useState(false);
    const classes = useStyles();

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onSubmit = (formData) => {
        addColumn(formData.columnName);
        setEditMode(false);
    } ;

    return (
        <div className={classes.container}>
            {!editMode && <h3 onClick={activateEditMode} className={classes.title}>Add Column</h3>}
            {editMode && <AddColumnForm onSubmit={onSubmit} deactivateEditMode={deactivateEditMode} classes={classes}/>}
        </div>
    );
};

AddColumn.propTypes = {
    boardId: PropTypes.string.isRequired,
    addColumn: PropTypes.func.isRequired,
};

export default connect(null, {addColumn})(AddColumn);
