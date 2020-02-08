import React from 'react';
import Board from "./Board/Board";
import {Box, List, makeStyles, Fab} from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "3px",
    }
}));

function Boards() {
    const classes = useStyles();
    return (
      <List className={classes.boards}>
          {
              ["Trello", "Workfront", "Jira"].map ( (val, index) => {
                 return <Board key={index} title={val}/>
              })
          }
          <Card className={classes.board}>
              <CardContent>
                  <Fab color="primary" aria-label="add">
                      <AddIcon />
                  </Fab>
              </CardContent>
          </Card>
      </List>
    );
}

export default Boards;