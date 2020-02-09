import React from 'react';
import {connect} from "react-redux";
import Board from "./Board/Board";
import {List, makeStyles} from "@material-ui/core";
import {addProject, getProjects} from "../../../redux/boards-reducer";
import {PropTypes} from "prop-types";
import AddBoard from "./Board/AddBoard/AddBoard";


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

    // useEffect(() => {
    //     props.getProjects(props.userId);
    // }, [props.userId]);


    const boards = props.projects.map ( (p) => {
        return <Board key={p.id} project={p}/>
    });

    return (
        <List className={classes.boards}>
            {boards}
            <AddBoard/>
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

export default connect(mapStateToProps, {getProjects, addProject})(Boards);




