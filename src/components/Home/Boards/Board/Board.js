import React, {memo} from 'react';
import {Card, CardActionArea, CardContent, makeStyles, Typography} from '@material-ui/core';
import {PropTypes} from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(() => ({
    board: {
        borderRadius: "3px",
        cursor: "pointer"
    },
    title: {
        padding: "7px",
        color: "#000",
    },
    icons: {
        justifyContent: "flex-end"
    }
}));

function Board({project}) {
    const classes = useStyles();
    return (
        <Card className={classes.board}>
            <CardActionArea>
                <CardContent>
                    <Typography variant={"h5"} className={classes.title}>{project.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

Board.propTypes = {
    project: PropTypes.object.isRequired
};

export default memo(Board);