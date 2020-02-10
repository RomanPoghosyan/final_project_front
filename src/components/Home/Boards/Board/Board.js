import React, {memo} from 'react';
import {Card, CardActionArea, CardContent, makeStyles, Typography} from '@material-ui/core';
import {PropTypes} from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    board: {
        borderRadius: "3px",
        cursor: "pointer",
    },
    area: {
        height: "100%"
    },
    title: {
        padding: "7px",
        color: "#000",
    },
    icons: {
        justifyContent: "flex-end"
    }
}));

function Board({board}) {
    const classes = useStyles();
    return (
        <Card className={classes.board}>
            <Link to={`/board/${board.id}`}>
                <CardActionArea className={classes.area}>
                    <CardContent className={classes.content}>
                            <Typography variant={"h5"} className={classes.title}>{board.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

Board.propTypes = {
    board: PropTypes.object.isRequired
};

export default memo(Board);