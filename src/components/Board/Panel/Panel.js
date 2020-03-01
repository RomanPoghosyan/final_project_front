import React, {Suspense} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoardUsers from "./BoardUsers/BoardUsers";
import BarSpinner from "../../common/Spinners/BarSpinner/BarSpinner";

const AddUser = React.lazy(() => import("./AddUser/AddUser"));



const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    }
}));



const Panel = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Suspense fallback={<BarSpinner size={100} />}><AddUser /></Suspense>
            <BoardUsers />
        </div>
    )
};



export default Panel;