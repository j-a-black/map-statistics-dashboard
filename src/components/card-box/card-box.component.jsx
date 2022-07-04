import React from "react";

import { Card } from "semantic-ui-react";

const CardBox = ({ header, description }) => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CardBox;
