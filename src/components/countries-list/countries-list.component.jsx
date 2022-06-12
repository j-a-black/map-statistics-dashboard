import React from "react";

import { addCommaToValue } from "../../utils";

import { Header, Segment, Table } from "semantic-ui-react";

const CountriesList = ({ globalData, countriesData }) => {
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
        {`Global Cases: ${addCommaToValue(globalData)}`}
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
