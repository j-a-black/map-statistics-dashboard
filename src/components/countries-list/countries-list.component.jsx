import React from "react";

import { addCommaToValue } from "../../utils";

import { Header, Segment, Table } from "semantic-ui-react";

const CountriesList = ({ globalCases, globalDeaths, countriesData }) => {
  //   const addCommaToValue = (value) => {
  //     if (value) {
  //       let valueWithComma = value.toLocaleString("en-US");
  //       return valueWithComma;
  //     }
  //     return;
  //   };

  const renderCountriesList = countriesData.map(({ country, cases }) => {
    const casesWithCommas = addCommaToValue(cases);

    return (
      <Table.Row key={country}>
        <Table.Cell>{country}</Table.Cell>
        <Table.Cell>{casesWithCommas}</Table.Cell>
      </Table.Row>
    );
  });

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
      <Segment style={{ height: "40rem", overflowY: "scroll" }}>
        <Table attached>
          <Table.Header>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Cases</Table.HeaderCell>
          </Table.Header>
          <Table.Body>{renderCountriesList}</Table.Body>
        </Table>
      </Segment>
    </>
  );
};

export default CountriesList;
