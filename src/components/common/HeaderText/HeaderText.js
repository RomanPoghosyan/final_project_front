import React from "react";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    headerTextContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
    },
    line: {
        borderBottom: "1px solid #3f3f4b",
    },
    content: {
        textAlign: "center"
    }
});

const HeaderText = ({element}) => {
    const classes = useStyles();

    return (
        <div className={classes.headerTextContainer}>
            <div className={classes.line} />
            <div className={classes.content}>{element}</div>
            <div className={classes.line} />
        </div>
    );
};


export default HeaderText
