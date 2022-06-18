import React from "react";

import { addCommaToValue } from "../../utils";

import { Container, Header, Segment, Table } from "semantic-ui-react";

const CountriesList = ({ globalCases, globalDeaths, countriesData }) => {
  //   const addCommaToValue = (value) => {
  //     if (value) {
  //       let valueWithComma = value.toLocaleString("en-US");
  //       return valueWithComma;
  //     }
  //     return;
  //   };

  const renderCountriesList = countriesData.map(
    ({ country, cases, deaths }) => {
      const countryCases = addCommaToValue(cases);
      const countryDeaths = addCommaToValue(deaths);

      return (
        <Table.Row key={country}>
          <Table.Cell>{country}</Table.Cell>
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
        style={{ height: "40rem", overflowY: "scroll", paddingTop: "2rem" }}
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
