import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import {TextField} from "@material-ui/core";
import WithEditMode from "../../../common/WithEditMode/WithEditMode";
import {makeStyles} from "@material-ui/styles";
import {changeTitle} from "../../../../redux/Tasks/actions";


const useStyles = makeStyles({
    title: {
        height: "70px"
    },
    field: {
        padding: "14.2px 24px 14px 24px"
    },
    input: {
        letterSpacing: '0.0075em',
        fontSize: '1.25rem',
        lineHeight: "1.6",
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
    }
});

const TaskTitle = ({title}) => {
    const classes = useStyles();
    return (
        <WithEditMode value={title} thunkCreator={changeTitle}>
            {(value, editMode, activateEditMode, deactivateEditMode, onValueChange) => (
                <>
                    {!editMode &&
                    <div className={classes.title}>
                        <DialogTitle id="form-dialog-title" onDoubleClick={activateEditMode}>{value}</DialogTitle>
                    </div>
                    }
                    {editMode &&
                    (<div className={classes.title}>
                        {/*<TextField className={classes.field} inputProps={{style: {letterSpacing: '0.0075em', fontSize: '1.25rem', fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`}}} onChange={onValueChange} autoFocus={true} onBlur={deactivateEditMode} value={value}/>*/}
                        <TextField className={classes.field} InputProps={{classes: {input: classes.input}}} onChange={onValueChange} autoFocus={true} onBlur={deactivateEditMode} value={value}/>
                    </div>)
                    }
                </>
            )}
        </WithEditMode>
    )
};

export default TaskTitle;