import React from "react";

import { Container, Header } from "semantic-ui-react";
import { Line } from "react-chartjs-2";

import { titleCaseFormat } from "../../utils";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarController,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarController,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

import {
  Chart as ChartJS,
  BarController,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title
);

const Charts = ({
  globalHistoricalData,
  countryHistoricalData,
  countryItemSelected,
  countriesData,
}) => {
  let cases = {} || 0,
    deaths = {} || 0,
    country = "",
    province = "";

  if (countryHistoricalData.length !== 0 && countryItemSelected) {
    countryHistoricalData.province !== null
      ? (province = titleCaseFormat(countryHistoricalData.province))
      : (country = countryHistoricalData.country);
    cases = countryHistoricalData.timeline.cases;
    deaths = countryHistoricalData.timeline.deaths;
  } else {
    cases = globalHistoricalData.cases;
    deaths = globalHistoricalData.deaths;
  }

  const labels = [];

  const casesData = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        data: cases,
        backgroundColor: ["rgb(255, 165, 0)"],
        borderColor: ["rgb(255, 165, 0)"],
        borderWidth: 1.5,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBackgroundColor: "rgb(255, 165, 0)",
        pointHoverBorderColor: "rgb(255, 165, 0)",
      },
    ],
  };

  const deathsData = {
    labels: labels,
    datasets: [
      {
        label: "Deaths",
        data: deaths,
        backgroundColor: ["rgb(255, 0, 0)"],
        borderColor: ["rgb(255, 0, 0)"],
        borderWidth: 1.5,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        pointHoverBackgroundColor: "rgb(255, 0, 0)",
        pointHoverBorderColor: "rgb(255, 0, 0)",
      },
    ],
  };

  return (
    <>
      <Header as="h2" textAlign="center">
        30-Day{" "}
        {country
          ? `${country}`
          : province
          ? `${province} (Province)`
          : "Global"}{" "}
        Snapshot
      </Header>
      <Container>
        <Line data={casesData} />
      </Container>
      <Container>
        <Line data={deathsData} />
      </Container>
    </>
  );
};

export default Charts;
