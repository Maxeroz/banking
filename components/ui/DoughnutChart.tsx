"use client";

import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  Chart.register(ArcElement);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265b8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: { display: false },
        },
      }}
    />
  );
};

export default DoughnutChart;
