import React, { useState, useEffect } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { getNearbyStations } from "./api";
import Map from "./components/Map/Map";

export default function App() {
  const [stations, setStations] = useState([]);
  const [coords, setCoords] = useState({ lat: 51.5137608, lng: -0.1653845 });
  const [childClicked, setChildClicked] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  // get the user location base on browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getNearbyStations(coords, 1000).then((data) => {
      setStations(data);
    });
  }, [coords, bounds]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid items xs={12} md={4}>
          <List stations={stations} childClicked={childClicked} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            stations={stations}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}
