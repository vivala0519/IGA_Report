import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const SerialChart = (props: any) => {
  const { labels, lineData, barData } = props;
  // console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Unique Event Count',
        yAxisID: 'y-right',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: lineData,
      },
      {
        type: 'bar' as const,
        label: 'Total Event Count',
        yAxisID: 'y-left',
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'blue',
        borderWidth: 2,
        data: barData,
      },
    ],
  };
  const options: any = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },

    scales: {
      'y-right': {
        type: 'linear',
        position: 'right',
      },
    },
  };
  return (
    <DAUDiv>
      <Title>DAU</Title>
      <ChartDiv>
        <Chart
          type="bar"
          data={data}
          options={options}
          style={{ width: '30%' }}
        />
      </ChartDiv>
    </DAUDiv>
  );
};

export default SerialChart;

const DAUDiv = styled.div`
  margin: 12px 12px;
`;

const Title = styled.div`
  font-size: 13px;
  color: blue;
  font-weight: bold;
`;

const ChartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`;
