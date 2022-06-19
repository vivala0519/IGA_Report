import React, { useEffect } from 'react';
import AxiosHook from '../hooks/AxiosHook';
import PiecChart from '../chart/PieChart';

const PieOfTopReferral = () => {
  const data: any = AxiosHook(
    'https://static.adbrix.io/front/coding-test/event_3.json'
  );
  const labels: any = [];
  const pieData: any = [];

  // useEffect(() => {
  if (data) {
    const row = data.rows;
    row.sort((a: any, b: any) => b[1] - a[1]);
    let temp = 0;
    for (let i = 0; i < row.length; i += 1) {
      if (i < 4) {
        labels.push(row[i][0]);
        pieData.push(row[i][1]);
      } else {
        temp += parseInt(row[i][1]);
      }
    }
    labels.push('etc');
    pieData.push(temp);
  }
  // }, [data]);
  return <PiecChart labels={labels} pieData={pieData} />;
};

export default PieOfTopReferral;
