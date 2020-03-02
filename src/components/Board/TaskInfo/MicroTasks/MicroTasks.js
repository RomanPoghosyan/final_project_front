import React from "react";
import Typography from "@material-ui/core/Typography";
import AddMicroTaskForm from "./AddMicroTaskForm/AddMicroTaskForm";

const MicroTasks = ({microTasks}) => {
    const onSubmit = (formData) => {
          console.log("Micro task form", formData)
    };

    return (
        <>
            <Typography variant="h6">
                Micro Tasks
            </Typography>
            <div>
                {microTasks.length ?<p>list</p> : ""}
                <AddMicroTaskForm onSubmit={onSubmit}/>
            </div>
        </>
    );
};

export default MicroTasks;