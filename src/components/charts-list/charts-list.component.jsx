import React from "react";

import Charts from "../charts/charts.component";

import { Container } from "semantic-ui-react";

const ChartsList = ({
  globalHistoricalData,
  countryHistoricalData,
  countryItemSelected,
  countriesData,
}) => {
  const RenderMsg = () => {
    return <p>Information not available</p>;
  };

  return (
    <Container>
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
