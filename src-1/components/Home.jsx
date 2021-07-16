// Class Component - class keyword, define state object
// Functional component - hooks - useState()

import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
  paper: {
    padding: "20px",
    color: "darkblue",
    backgroundColor: "lightcoral",
  },
}));

const Home = () => {
  const paperStyle = {
    padding: "20px",
    color: "darkblue",
    backgroundColor: "lightcoral",
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={3}>
          <Paper
            style={{
              padding: "20px",
              color: "darkblue",
              backgroundColor: "lightcoral",
            }}
          >
            paper
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper}>paper</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper style={paperStyle}>paper</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper
            style={{
              padding: "20px",
              color: "darkblue",
              backgroundColor: "lightcoral",
            }}
          >
            paper
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
