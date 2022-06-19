import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const PiecChart = (props: any) => {
  const { labels, pieData } = props;
  const data = {
    labels,
    datasets: [
      {
        label: 'Top Referral',
        data: pieData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options: any = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      outlabels: {
        text: '%l %p',
        color: 'white',
        stretch: 45,
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
        },
      },
    },
  };
  return (
    <SumDiv>
      <Title>Top Referral</Title>
      <ChartDiv>
        <Pie data={data} options={options} style={{ width: '60%' }} />
      </ChartDiv>
    </SumDiv>
  );
};

export default PiecChart;

const SumDiv = styled.div`
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
