import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import {PropTypes} from "prop-types";

const useStyles = makeStyles ( theme => ({
    board: {
        backgroundColor: 'gray',
        borderRadius: "3px",
        cursor: "pointer"
    },
    title : {
      padding: "7px",
      color: "#fff",
    },
}));

function Board ( {title} ) {
    const classes = useStyles();
    return (
            <Box className={classes.board}>
                <Typography variant={"h5"} className={classes.title}>{title}</Typography>
            </Box>
    );
}

Board.propTypes = {
  title: PropTypes.string
};

export default Board;