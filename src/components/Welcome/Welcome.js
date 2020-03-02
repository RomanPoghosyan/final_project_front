import React, {memo} from 'react';
import {makeStyles} from "@material-ui/styles";
import illustration from "../../assets/images/illustration.jpg";

export const useStyles = makeStyles((theme => ({
    root: {
        display: "grid",
        justifyItems: "center",
        height: '100%',
        // backgroundImage: `url(${illustration})`
        background: theme.palette.background.main
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
        },
    },
    left: {
        display: "grid",
        color: theme.palette.secondary.dark,
    },
    right: {
        width: "100%",
        // color: theme.palette.secondary.dark,
    },
    image: {
        width: "100%",

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
                <div className={classes.right}>
                    <img className={classes.image} src={illustration} alt=""/>
                </div>
            </div>
            <div />
        </div>
    );
};

export default memo(Welcome);