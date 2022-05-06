import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import DirectionsBikeOutlined from "@material-ui/icons/DirectionsBikeOutlined";
import mapStyles from "./mapStyles";
import useStyles from "./styles.js";

const Map = ({ coords, stations, setCoords, setBounds, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {stations.length &&
          stations.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.coords.lat)}
              lng={Number(place.coords.lng)}
              key={i}
            >
              {!matches ? (
                <DirectionsBikeOutlined color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {" "}
                    {place.name}
                  </Typography>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {"Bikes: "}
                    {Number(place.bikes)}
                  </Typography>
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
