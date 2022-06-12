import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Grid, Message, Header, Ref } from "semantic-ui-react";

import Jumbotron from "./components/jumbotron/jumbotron.component";
import Map from "./components/map/map.component";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const countries = axios.get("https://disease.sh/v3/covid-19/countries");
  const all = axios.get("https://disease.sh/v3/covid-19/all");

  useEffect(() => {
    const getData = async () => {
      await axios
        .all([countries, all])
        .then(
          axios.spread((...responses) => {
            setCountriesData(responses[0].data);
            setGlobalData(responses[1].data);
          })
        )
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  console.log(countriesData);
  console.log(globalData);

  return (
    <div>
      <Grid container style={{ padding: "2rem 0" }}>
        <Grid.Row>
          <Grid.Column>
            <Jumbotron />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Map countriesData={countriesData} globalData={globalData} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>Hi</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
