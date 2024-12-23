'use client';

import {AgCharts} from "ag-charts-react";

export default function TopSongs(props: { data: Record<string, string | number> }) {
  return (
    <AgCharts options={{
      title: {
        text: "Top Songs",
      },
      theme: 'ag-default-dark',
      data: [{
        duration: 'Last 30 days',
        ...props.data
      }],
      series: Object.keys(props.data).map((key) => ({
        type: 'bar',
        xKey: 'duration',
        yKey: key,
        yName: key,
      })),
    }} />
  )
}
