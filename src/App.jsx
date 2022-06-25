import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid, Segment } from "semantic-ui-react";

import Jumbotron from "./components/jumbotron/jumbotron.component";
import Map from "./components/map/map.component";
import CountriesList from "./components/countries-list/countries-list.component";
import ChartsList from "./components/charts-list/charts-list.component";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [globalHistoricalData, setGlobalHistoricalData] = useState([]);
  const [countryItemSelected, setCountryItemSelected] = useState("");

  const countries = axios.get("https://disease.sh/v3/covid-19/countries");
  const worldwide = axios.get("https://disease.sh/v3/covid-19/all");
  const globalHistory = axios.get(
    "https://disease.sh/v3/covid-19/historical/all"
  );

  const handleCountryItemClicked = (event) => {
    if (countryItemSelected === event.target.textContent) {
      setCountryItemSelected("");
      return;
    }
    setCountryItemSelected(event.target.textContent);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .all([countries, worldwide, globalHistory])
        .then(
          axios.spread((...responses) => {
            setCountriesData(responses[0].data);
            setGlobalData(responses[1].data);
            setGlobalHistoricalData(responses[2].data);
          })
        )
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  // console.log(countriesData);
  // console.log(globalData);

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
            <Map
              countriesData={countriesData}
              countryItemSelected={countryItemSelected}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid container columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <CountriesList
                  countriesData={countriesData}
                  globalCases={globalData.cases}
                  globalDeaths={globalData.deaths}
                  globalDataLastUpdated={globalData.updated}
                  handleCountryItemClicked={handleCountryItemClicked}
                  countryItemSelected={countryItemSelected}
                />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <ChartsList globalHistoricalData={globalHistoricalData} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
