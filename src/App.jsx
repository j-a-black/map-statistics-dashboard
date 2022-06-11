import React from "react";

import { Button, Grid, Message, Header, Ref } from "semantic-ui-react";
import Jumbotron from "./components/jumbotron/jumbotron.component";

const App = () => {
  return (
    <div>
      <Grid container style={{ padding: "2rem" }}>
        <Grid.Row>
          <Grid.Column>
            <Jumbotron />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
