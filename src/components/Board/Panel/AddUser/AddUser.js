import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import AddUserForm from "./AddUserForm/AddUserForm";
import {getBoardRoles} from "../../../../redux/role-reducer";
import {sendInvitationNotification} from "../../../../redux/notification-reducer";


const AddUser = ({searchedUsers, boardId, getBoardRoles, sendInvitationNotification: inviteUser}) => {
    const [open, setOpen] = React.useState(false);
    // const memoizedCallback  = useCallback((boardId) => getBoardRoles(boardId), []);

    // useEffect(() => {
    //     debugger
    //     memoizedCallback(boardId);
    // }, [memoizedCallback, boardId]);


    const handleClickOpen = () => {
        getBoardRoles(boardId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        console.log({...formData, projectId: boardId});
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

export default connect(mapStateToProps, {getBoardRoles, sendInvitationNotification})(AddUser);