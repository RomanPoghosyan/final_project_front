import React from "react";
import {useDispatch, useSelector} from "react-redux";
import AccountIcon from "../../../common/AccountIcon/AccountIcon";
import {makeStyles} from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditUserRoleForm from "./EditUserRoleForm/EditUserRoleForm";
import {changeUserRole} from "../../../../redux/User/actions";
import {getBoardIdSelect} from "../../../../redux/Board/selectors";
import {getBoardUsersSelect} from "../../../../redux/User/selectors";


const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridAutoFlow: "column",
        gridColumnGap: "5px",
        gridTemplateColumns: "repeat(5, 1fr)",
        padding: 8
    },
}));

const BoardUsers = () => {
    const [open, setOpen] = React.useState(false);
    const [userId, setUserId] = React.useState(null);
    const [roleId, setRoleId] = React.useState(null);
    const boardUsers = useSelector(getBoardUsersSelect);
    const boardId = useSelector(getBoardIdSelect);
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleClickOpen = (selectedUserId, selectedUserRoleId) => {
        setOpen(true);
        setUserId(selectedUserId);
        setRoleId(selectedUserRoleId);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData) => {
        dispatch(changeUserRole(boardId, userId, formData.roleId));
        setRoleId(formData.roleId);
    };

    return (
        <div>
            <div className={classes.container}>
                {boardUsers.map(u => <AccountIcon key={u.id} firstName={u.first_name} lastName={u.last_name} height={30}
                                                  width={30} borderRadius={"50%"} backgroundColor={"primary"} padding={"4px 0 5px 0"}
                                                  onClick={() => handleClickOpen(u.id, u.roleId)}/>)}
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit user role</DialogTitle>
                <EditUserRoleForm currentRoleId={roleId} onSubmit={onSubmit} handleClose={handleClose} />
            </Dialog>
        </div>
    );
};

export default BoardUsers;




