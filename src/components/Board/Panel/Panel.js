import React, {Suspense} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoardUsers from "./BoardUsers/BoardUsers";

const AddUser = React.lazy(() => import("./AddUser/AddUser"));



const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        marginTop: 8
    }
}));



const Panel = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Suspense fallback={"Getting Roles"}><AddUser /></Suspense>
            <BoardUsers />
        </div>
    )
};



export default Panel;