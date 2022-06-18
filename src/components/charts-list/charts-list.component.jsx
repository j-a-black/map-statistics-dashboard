import React from "react";

import { Container } from "semantic-ui-react";
import { Bar, Line, Chart } from "react-chartjs-2";

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
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Legend
);

const ChartsList = ({ globalHistoricalData }) => {
  const { cases, deaths } = globalHistoricalData;

  // const labels = ["January", "February", "March", "April", "May", "June"];
  const labels = [];

  const casesData = {
    labels: labels,
    datasets: [
      {
        label: "30 Days: Global Cases",
        data: cases,
        backgroundColor: ["rgb(255, 165, 0)"],
        borderColor: ["rgb(255, 165, 0)"],
        borderWidth: 1,
        fill: true,
        // yAxisID: "y-axis-1",
      },
    ],
  };
  const deathsData = {
    labels: labels,
    datasets: [
      {
        label: "30 Days: Global Deaths",
        data: deaths,
        backgroundColor: ["rgb(255, 0, 0)"],
        borderColor: ["rgb(255, 0, 0)"],
        borderWidth: 1,
        fill: false,
        // yAxisID: "y-axis-2",
      },
    ],
  };

  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         // data: [65, 59, 80, 81, 56, 55, 40],
  //         data: cases,
  //         backgroundColor: ["rgba(255, 99, 132, 0.2)"],
  //         borderColor: ["rgb(255, 99, 132)"],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  return (
    <Container>
      <Container>
        <Line data={casesData} />
      </Container>
      <Container>
        <Line data={deathsData} />
      </Container>
    </Container>
  );
};

export default ChartsList;
