import React, {Suspense} from "react";
import {makeStyles} from "@material-ui/core/styles";
const AddUser = React.lazy(() => import("./AddUser/AddUser"));



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
            <Suspense fallback={"Getting Roles"}><AddUser /></Suspense>
        </div>
    )
};



export default Panel;