import React from "react";

import { Button, Grid, Message, Header, Ref } from "semantic-ui-react";

const Jumbotron = () => {
  const ExampleButton = React.forwardRef((props, ref) => (
    <div>
      <button {...props} ref={ref} />
    </div>
  ));
  const forwardedRef = React.useRef(null);

  return (
    <>
      <Message>
        <Header as="h1">Covid Statistic Dashboard</Header>
        <p>
          This dashboard allows users to view the number of C-19 cases reported
          in each country. Information is derived from the Open Disease Data API
        </p>
        <Ref innerRef={forwardedRef}>
          <ExampleButton
            as="a"
            href="https://disease.sh/"
            target="_blank"
            rel="noreferrer noopener"
            color="blue"
            style={{ fontSize: "1.6rem" }}
          >
            View API &raquo;
          </ExampleButton>
        </Ref>
      </Message>
    </>
  );
};

export default Jumbotron;
