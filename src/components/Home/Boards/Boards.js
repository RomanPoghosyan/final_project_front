import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Board from "./Board/Board";
import {Fab, List, makeStyles} from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';
import {getProjects} from "../../../redux/boards-reducer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {PropTypes} from "prop-types";


const useStyles = makeStyles ( theme => ({
    boards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(110px, 1fr))",
        gridGap: '10px',
    },
    board : {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "f###",
        cursor: "pointer",
        borderRadius: "3px",
    }
}));

function Boards(props) {
    const classes = useStyles();

    useEffect(() => {
        props.getProjects(props.userId);
    }, [props.userId]);

    return (
        <List className={classes.boards}>
            {
                props.projects.map ( (p) => {
                    return <Board key={p.id} project={p}/>
                })
            }
            <Card className={classes.board}>
                <CardContent>
                    <Fab color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </CardContent>
            </Card>
        </List>
    );
}

Boards.prototype = {
    getProjects: PropTypes.func,
    projects: PropTypes.array,
    userId: PropTypes.number,
};

let mapStateToProps = (state) => ({
    projects: state.home.boards.projects,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, {getProjects})(Boards);




