import React from 'react';
import Board from "./Board/Board";
import {Box, List, makeStyles, Fab} from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';

const useStyles = makeStyles ( theme => ({
    boards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
        gridGap: '10px',
    },
    board : {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "gray",
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
          <Box className={classes.board}>
              <Fab color="primary" aria-label="add">
                  <AddIcon />
              </Fab>
          </Box>
      </List>
    );
}

export default Boards;