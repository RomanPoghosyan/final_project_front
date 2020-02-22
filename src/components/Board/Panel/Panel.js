import React from "react";
import AddUser from "./AddUser/AddUser";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
    }
}));



const Panel = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AddUser />
        </div>
    )
};



export default Panel;