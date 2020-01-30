import React from "react";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    header: {

    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <h1>Header</h1>
        </div>
    );
};

export default Header;