import React, { useState, useEffect, createRef } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles.js";
import StationDetails from "../StationDetails/StationDetails";
const List = ({ stations, childClicked }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) =>
      Array(stations.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [stations]);

  return (
    <div className={classes.container}>
      <Box sx={{ mt: 3 }} />
      <Typography variant="h4">Explore the bike stations around you</Typography>
      <Box sx={{ mt: 8 }} />
      <Grid container spacing={3} className={classes.list}>
        {stations?.map((station, i) => (
          <Grid ref={elRefs[i]} item key={i} xs={12}>
            <StationDetails
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              station={station}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
