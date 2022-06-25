import React, { useState } from "react";

import { addCommaToValue, formatDateAndTime } from "../../utils";

import { Container, Header, Segment, Table } from "semantic-ui-react";

import "./countries-list.styles.scss";

const CountriesList = ({
  globalCases,
  globalDeaths,
  globalDataLastUpdated,
  countriesData,
  handleCountryItemClicked,
  countryItemSelected,
}) => {
  const formattedGlobalDeaths = addCommaToValue(globalDeaths);
  const formattedGlobalCases = addCommaToValue(globalCases);

  const formattedGlobalDataLastUpdated = formatDateAndTime(
    globalDataLastUpdated
  );

  const renderCountriesList = countriesData.map(
    ({ country, cases, deaths }) => {
      const countryCases = addCommaToValue(cases);
      const countryDeaths = addCommaToValue(deaths);

      return (
        <Table.Row key={country}>
          <Table.Cell
            className={
              countryItemSelected === country
                ? "active-border-left"
                : "border-left"
            }
            // onClick={handleClickOnCountryItem}
            style={{ cursor: "pointer" }}
            onClick={handleCountryItemClicked}
          >
            {country}
          </Table.Cell>
          <Table.Cell>
            {countryCases} / {countryDeaths}
          </Table.Cell>
        </Table.Row>
      );
    }
  );

  return (
    <>
      <Header as="h2" size="huge" attached="top" inverted color="red" block>
        <Header as="h3">{`Global Cases: ${formattedGlobalCases}`}</Header>
        <Header as="h3"> {`Global Deaths: ${formattedGlobalDeaths}`}</Header>
        <Header as="h3">
          {" "}
          {`Current As Of: ${formattedGlobalDataLastUpdated}`}
        </Header>
      </Header>
      <Container
        style={{ height: "49rem", overflowY: "scroll", paddingTop: "2rem" }}
      >
        <Table attached>
          <Table.Header>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Cases / Deaths</Table.HeaderCell>
          </Table.Header>
          <Table.Body>{renderCountriesList}</Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default CountriesList;
