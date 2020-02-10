import React from "react";
import {withRouter} from "react-router-dom";

const Board = (props) => {
    const boardId = props.match.params.boardId;
    return <h1>Board Id {boardId}</h1>
};

export default withRouter( Board );