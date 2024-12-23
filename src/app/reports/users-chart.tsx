'use client';

import {AgCharts} from "ag-charts-react";

export default function UsersChart(props: { data: { month: string, users: number }[] }) {
  return <AgCharts options={{
    title: {
      text: "User Growth",
    },
    theme: 'ag-default-dark',
    data: props.data,
    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "users",
        yName: "Users",
      },
    ],
  }} />;
}
