import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(( () => ({
    main: {
      height: '100%',
      background: 'linear-gradient(135deg, #0079bf, #5067c5)'
    },
    content: {
        width: '85%',
        margin: 'auto',
        height: "85%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
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

function Main() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h2>Tikoi mot lets you work more collaboratively and get more done.</h2>
                    <h3>Tikoi mot’s boards, lists, and cards enable you to prioritize and organize your projects in a flexible, fun, and rewarding way.</h3>
                </div>
                <div className={classes.right}>

                </div>
            </div>
            <div>

            </div>
        </div>
    );

}

export default Main;