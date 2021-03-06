import React from "react";
import {makeStyles} from "@material-ui/styles";
import { PropTypes } from "prop-types";

const useStyles = makeStyles({
    headerTextContainer: {
        display: "grid",
        gridTemplateColumns: "2fr 3fr 2fr",
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

HeaderText.propTypes = {
  element: PropTypes.element.isRequired
};

export default HeaderText
