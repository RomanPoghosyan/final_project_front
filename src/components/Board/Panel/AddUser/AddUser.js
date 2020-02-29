import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import AddUserForm from "./AddUserForm/AddUserForm";
import {sendInvitationNotification} from "../../../../redux/Notification/actions";


const AddUser = ({searchedUsers, boardId, getBoardRoles, sendInvitationNotification: inviteUser}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        inviteUser({...formData, projectId: boardId});
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen} color={"secondary"}>Invite User</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Invite User</DialogTitle>
                <AddUserForm onSubmit={onSubmit} handleClose={handleClose} searchedUsers={searchedUsers} />
            </Dialog>
        </>
    );
};

const mapStateToProps = (state) => ({
    boardId: state.home.currentBoard.id,
});

export default connect(mapStateToProps, {sendInvitationNotification})(AddUser);