import React from "react";

import { Statistic } from "semantic-ui-react";

const StatisticBox = ({ label, value }) => {
  return (
    <Statistic>
      <Statistic.Label>{label}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default StatisticBox;
