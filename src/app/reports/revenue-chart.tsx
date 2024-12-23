'use client';

import {AgCharts} from "ag-charts-react";

export default function RevenueChart(props: { data: { stream: string, revenue: number }[] }) {
  return <AgCharts options={{
    title: {
      text: "Revenue Distribution",
    },
    subtitle: {
      text: "In Rupees (INR)",
    },
    theme: 'ag-default-dark',
    data: props.data,
    series: [
      {
        type: "pie",
        angleKey: "revenue",
        legendItemKey: "stream",
      },
    ],
  }} />;
}
