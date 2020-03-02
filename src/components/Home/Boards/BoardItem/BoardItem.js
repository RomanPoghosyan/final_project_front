import React, {memo} from 'react';
import {Card, CardActionArea, CardContent, makeStyles, Typography} from '@material-ui/core';
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    board: {
        borderRadius: "3px",
        cursor: "pointer",
        backgroundColor: theme.palette.column.main,
    },
    area: {
        height: "100%"
    },
    title: {
        padding: "7px",
        color: theme.palette.secondary.main,

        // textDecorationColor: "underline red"
    },
    icons: {
        justifyContent: "flex-end"
    }
}));

function BoardItem({board}) {
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

BoardItem.propTypes = {
    board: PropTypes.object.isRequired
};

export default memo(BoardItem);