import React from "react";

import Charts from "../charts/charts.component";

import { Container, Header } from "semantic-ui-react";

const ChartsList = ({
  globalHistoricalData,
  countryHistoricalData,
  countryItemSelected,
  countriesData,
}) => {
  const RenderMsg = () => {
    return <Header as="h2">Information Not Available</Header>;
  };

  return (
    <Container style={{ height: "60rem" }}>
      {countryHistoricalData !== undefined ? (
        <Charts
          globalHistoricalData={globalHistoricalData}
          countryItemSelected={countryItemSelected}
          countriesData={countriesData}
          countryHistoricalData={countryHistoricalData}
        />
      ) : (
        <RenderMsg />
      )}
    </Container>
  );
};

export default ChartsList;
