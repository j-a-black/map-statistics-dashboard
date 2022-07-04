import React from "react";

import { Button, Message } from "semantic-ui-react";

const Jumbotron = () => {
  return (
    <Message color="blue">
      <Message.Content>
        <Message.Header as="h1" style={{ fontSize: "3.5rem" }}>
          Covid Statistic Dashboard
        </Message.Header>
        <Message.List>
          <Message.Item>
            This dashboard allows users to view the number of C-19 cases
            reported in each country; information is derived from the Open
            Disease Data API
          </Message.Item>
          <Message.Item>
            Click on a country row listed below to display its 30 day historical
            data
          </Message.Item>
          <Message.Item>
            Click on the country again to revert back to displaying the global
            30 day historical data
          </Message.Item>
        </Message.List>
      </Message.Content>

      <Button
        as="a"
        href="https://disease.sh/"
        target="_blank"
        rel="noreferrer noopener"
        color="blue"
        style={{ fontSize: "1.6rem", marginTop: "3rem" }}
      >
        View API &raquo;
        <br />
      </Button>
    </Message>
  );
};

export default Jumbotron;
