import React from "react";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    headerTextContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
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


export default HeaderText



























// import React from "react";
// import {makeStyles} from "@material-ui/styles";
//
//
// const useStyles = makeStyles({
//     headerTextContainer: {
//         display: "grid",
//         alignContent: "center",
//         // width: "70%",
//     },
//     header: {
//         width: "100%",
//         textAlign: "center",
//         borderBottom: "1px solid #000",
//         lineHeight: "0.1em",
//         margin: "10px 0 20px",
//     },
//     headerText: {
//         background: "#d0ea2b",
//         padding: "0 10px",
//     }
// });
//
// const HeaderText = ({text}) => {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.headerTextContainer}>
//             <h2 className={classes.header}>
//                 <span className={classes.headerText}>{text}</span>
//             </h2>
//         </div>
//     );
// };
//
//
// export default HeaderText