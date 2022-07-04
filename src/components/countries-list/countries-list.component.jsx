import React from "react";

import { addCommaToValue } from "../../utils";

import { Container, Table } from "semantic-ui-react";

import "./countries-list.styles.scss";

const CountriesList = ({
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
            singleLine
            className={
              countryItemSelected === country
                ? "active-border-left active-name-highlighted "
                : "border-left"
            }
            style={{ cursor: "pointer" }}
            onClick={handleCountryItemClicked}
          >
            {country}
          </Table.Cell>
          <Table.Cell singleLine>
            {countryCases} / {countryDeaths ? countryDeaths : 0}
          </Table.Cell>
        </Table.Row>
      );
    }
  );

  return (
    <>
      <Container style={{ height: "60rem", overflowY: "scroll" }}>
        <Table attached columns={2} unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>Cases / Deaths</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{renderCountriesList}</Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default CountriesList;
