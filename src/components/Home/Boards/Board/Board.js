import React, {memo} from 'react';
import {Card, Typography, makeStyles, CardContent, CardActionArea} from '@material-ui/core';
import {PropTypes} from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
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
                    <Typography variant={"h5"} className={classes.title}>{project.title}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.icons}>
                <Fab size={"small"} color={"secondary"}>
                    K
                </Fab>
                <Fab size={"small"} color={"secondary"}>
                    RP
                </Fab>
                <Fab size={"small"} color={"secondary"}>
                    TY
                </Fab>
            </CardActions>
        </Card>
    );
}

Board.propTypes = {
    project: PropTypes.object.isRequired
};

export default memo(Board);