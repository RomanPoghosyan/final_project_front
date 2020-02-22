import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import AddUserForm from "./AddUserForm/AddUserForm";


const AddUser = (props) => {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        console.log(formData);
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen} color={"secondary"}>Invite User</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Invite User</DialogTitle>
                <AddUserForm onSubmit={onSubmit} handleClose={handleClose} searchedUsers={props.searchedUsers}/>
            </Dialog>
        </>
    );
};

const mapStateToProps = (state) => ({
    searchedUsers: state.user.searchedUsers,
});

export default connect(mapStateToProps, null)(AddUser);