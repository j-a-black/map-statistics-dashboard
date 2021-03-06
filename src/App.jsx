import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  Segment,
  Divider,
  Loader,
  Dimmer,
  Header,
} from "semantic-ui-react";

import Jumbotron from "./components/jumbotron/jumbotron.component";
import Map from "./components/map/map.component";
import CountriesList from "./components/countries-list/countries-list.component";
import ChartsList from "./components/charts-list/charts-list.component";

import {
  findCountryOrProvince,
  addCommaToValue,
  formatDateAndTime,
} from "./utils";

import StatisticBox from "./components/statistic-box/statistic-box.component";
import CardBox from "./components/card-box/card-box.component";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [globalHistoricalData, setGlobalHistoricalData] = useState([]);
  const [countryItemSelected, setCountryItemSelected] = useState("");
  const [countryHistoricalData, setCountryHistoricalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const countries = axios.get("https://disease.sh/v3/covid-19/countries");
  const worldwide = axios.get("https://disease.sh/v3/covid-19/all");
  const globalHistory = axios.get(
    "https://disease.sh/v3/covid-19/historical/all"
  );
  const baseURLHistoricalData = "https://disease.sh/v3/covid-19/historical";

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
            setIsLoading(false);
          })
        )
        .catch((err) => {
          console.error(err);
          setErrorMessage(
            "Oops! Something went't wrong! We're unable to retrieve information at this time"
          );
          setIsLoading(false);
        });
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (!countryItemSelected) return;

      try {
        let result = await axios.get(`${baseURLHistoricalData}`);
        let data = findCountryOrProvince(result.data, countryItemSelected);
        setCountryHistoricalData(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [countryItemSelected]);

  return (
    <div>
      <Grid container style={{ padding: "2rem 0" }} centered>
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

        {isLoading ? (
          <Dimmer active>
            <Loader content="loading" />
          </Dimmer>
        ) : errorMessage ? (
          <Header as="h2">
            Opps, something went wrong! We're unable to retrieve the information
            at this time
          </Header>
        ) : (
          <>
            <Divider section horizontal>
              Overview
            </Divider>

            <Grid container columns={3} stackable centered>
              <Grid.Row centered={true}>
                <Grid.Column width={5} textAlign="center">
                  <StatisticBox
                    label="Global Cases"
                    value={addCommaToValue(globalData.cases)}
                  />
                </Grid.Column>
                <Grid.Column width={5} textAlign="center">
                  <StatisticBox
                    label="Global Deaths"
                    value={addCommaToValue(globalData.deaths)}
                  />
                </Grid.Column>
                <Grid.Column width={5} textAlign="center">
                  <CardBox
                    header="Current As Of"
                    description={formatDateAndTime(globalData.updated)}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid container columns={2} stackable divided>
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
                    <ChartsList
                      globalHistoricalData={globalHistoricalData}
                      countryItemSelected={countryItemSelected}
                      countriesData={countriesData}
                      countryHistoricalData={countryHistoricalData}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default App;
