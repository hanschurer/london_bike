import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

import useStyles from './styles.js';

const StationDetails = ({station,selected, refProp }) => {
  const classes = useStyles();
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
     <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">{station.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Station ID</Typography>
          <Typography gutterBottom variant="subtitle1">
            {station.id}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Bikes</Typography>
          <Typography gutterBottom variant="subtitle1">
            {station.bikes}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Distance</Typography>
          <Typography gutterBottom variant="subtitle1">
            {Math.ceil(station.distance)} miles
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Total Docks</Typography>
          <Typography gutterBottom variant="subtitle1">
            {station.totalDocks}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Spaces</Typography>
          <Typography gutterBottom variant="subtitle1">
            {station.spaces}
          </Typography>
        </Box>
       
      </CardContent>
    
    </Card>
  )
}

export default StationDetails;