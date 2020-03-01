import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Fab} from "@material-ui/core";
import {Add as AddIcon} from "@material-ui/icons";
import {addBoard} from "../../../../../redux/Boards/actions";
import {useDispatch} from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoardForm from "./AddBoardForm/AddBoardForm";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    board: {
        borderRadius: "3px",
        cursor: "pointer",
    },
    area: {
        height: "100%"
    },
    content: {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        marginTop: 12
    },
    icons: {
        justifyContent: "flex-end"
    },
    addIcon: {
        backgroundColor: theme.palette.secondary.light
    }
}));


const AddBoard = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        dispatch(addBoard(formData));
        setOpen(false);
    };

    return (
        <>
            <Card onClick={handleClickOpen} className={classes.board}>
                {/*<CardActionArea className={classes.area}>*/}
                    <CardContent className={classes.content}>
                        <Fab className={classes.addIcon} aria-label="add">
                            <AddIcon/>
                        </Fab>
                    </CardContent>
                {/*</CardActionArea>*/}
            </Card>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Board</DialogTitle>
                <AddBoardForm onSubmit={onSubmit} handleClose={handleClose} />
            </Dialog>
        </>
    );
};



export default AddBoard;