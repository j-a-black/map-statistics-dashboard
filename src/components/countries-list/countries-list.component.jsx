import React, { useState } from "react";

import { addCommaToValue } from "../../utils";

import { Container, Header, Segment, Table } from "semantic-ui-react";

import "./countries-list.styles.scss";

const CountriesList = ({
  globalCases,
  globalDeaths,
  countriesData,
  handleCountryItemClicked,
  countryItemSelected,
}) => {
  const renderCountriesList = countriesData.map(
    ({ country, cases, deaths }) => {
      const countryCases = addCommaToValue(cases);
      const countryDeaths = addCommaToValue(deaths);

      return (
        <Table.Row key={country}>
          <Table.Cell
            className={
              countryItemSelected === country ? "active-border-left" : ""
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
        <Header as="h3">{`Global Cases: ${addCommaToValue(
          globalCases
        )}`}</Header>
        <Header as="h3">
          {" "}
          {`Global Deaths: ${addCommaToValue(globalDeaths)}`}
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
