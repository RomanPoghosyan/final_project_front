import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(( () => ({
    root: {
        display: "grid",
        justifyItems: "center",
        height: '100%',
        background: 'linear-gradient(135deg, #0079bf, #5067c5)'
    },
    content: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: '85%',
        height: "85%",
        color: '#fff',
        '& h2': {
            fontSize: "calc(3.5vw + 12px)",
            lineHeight: "calc(3.5vw + 14px)"
        },
        '& h3': {
            fontSize: "calc(2.1vw + 12px)",
            lineHeight: "calc(2.1vw + 14px)"
        }
    },
    left: {
        display: "grid"
    }
})));

const Welcome = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h2>Katiro lets you work more collaboratively and get more done.</h2>
                    <h3>Katiro boards, lists, and cards enable you to prioritize and organize your projects in a flexible, fun, and rewarding way.</h3>
                </div>
                <div className={classes.right}>

                </div>
            </div>
            <div>

            </div>
        </div>
    );

};

export default Welcome;