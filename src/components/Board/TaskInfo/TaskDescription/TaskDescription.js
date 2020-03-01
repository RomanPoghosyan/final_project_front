import React from "react";
import WithEditMode from "../../../common/WithEditMode/WithEditMode";
import {makeStyles} from "@material-ui/styles";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {changeDescription} from "../../../../redux/Tasks/actions";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    title: {
        height: 70
    },
    textarea: {
        // padding: "14px 24px",
        letterSpacing: '0.00938em',
        fontSize: '1rem',
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif;`,
        lineHeight: "1.5",
        color: "rgba(0, 0, 0, 0.54)",
    }
});

const TaskDescription = ({description}) => {
    const classes = useStyles();
    console.log("RENDERED");
    return (
        <WithEditMode value={description} thunkCreator={changeDescription}>
            {(value, editMode, activateEditMode, deactivateEditMode, onValueChange) => (
                <>
                    <Typography variant="h6">
                        Description
                    </Typography>
                    {!editMode &&
                    <div className={classes.title}>
                        <DialogContentText id="alert-dialog-description" onDoubleClick={activateEditMode}>
                            {value ? value : "..."}
                        </DialogContentText>
                    </div>
                    }
                    {editMode &&
                    (<div className={classes.title}>
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} style={{width: "100%"}}
                                          className={classes.textarea} onChange={onValueChange}
                                          autoFocus={true} onBlur={deactivateEditMode} value={value ? value : ""}/>
                    </div>)
                    }
                </>
            )}
        </WithEditMode>
    )
};

export default TaskDescription;