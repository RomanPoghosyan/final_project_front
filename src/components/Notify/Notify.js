import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {setNotify} from "../../redux/Notify/notify-reducer";
import {getNotify} from "../../redux/Notify/notify-selectors";

function Notify() {
    const notification = useSelector(getNotify);
    const dispatch = useDispatch();
    function handleClose() {
        dispatch(setNotify({open: false, type: 'success', content: ''}))
    }
    return (
        <Snackbar open={notification.open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={notification.type}>
                {notification.content}
            </Alert>
        </Snackbar>
    );
}

export default Notify;