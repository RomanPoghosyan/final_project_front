import React, {memo} from 'react';
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles((theme => ({
    root: {
        display: "grid",
        justifyItems: "center",
        height: '100%',
        background: theme.palette.primary.main
    },
    content: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: '85%',
        height: "85%",
        color: '#fff',
        '& h2': {
            fontSize: "calc(3.2vw + 12px)",
            lineHeight: "calc(3.2vw + 14px)"
        },
        '& h3': {
            fontSize: "calc(1.9vw + 12px)",
            lineHeight: "calc(1.9vw + 14px)"
        }
    },
    left: {
        display: "grid",
        color: theme.palette.secondary.dark,
    }
})));

const Welcome = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h2>Time Controller lets you work more collaboratively and get more done.</h2>
                    <h3>Time Controller boards, lists, and cards enable you to prioritize and organize your projects in a flexible, fun, and rewarding way.</h3>
                </div>
                <div className={classes.right} />
            </div>
            <div />
        </div>
    );
};

export default memo(Welcome);