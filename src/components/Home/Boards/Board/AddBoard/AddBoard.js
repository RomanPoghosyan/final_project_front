import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Fab} from "@material-ui/core";
import {Add as AddIcon} from "@material-ui/icons";
import {addProject} from "../../../../../redux/boards-reducer";
import {connect} from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoardForm from "./AddBoardForm/AddBoardForm";
import PropTypes from "prop-types";


const AddBoard = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        props.addProject(formData);
        setOpen(false);
    };

    return (
        <>
            <Card onClick={handleClickOpen}>
                <CardContent>
                    <Fab color="secondary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Project</DialogTitle>
                <AddBoardForm onSubmit={onSubmit} handleClose={handleClose}/>
            </Dialog>
        </>
    );
};

AddBoard.propType = {
    addProject: PropTypes.func.required,
};


export default connect(null, {addProject})(AddBoard);