import React from 'react';
import AxiosHook from '../hooks/AxiosHook';
import PiecChart from '../chart/PieChart';

const PieOfTopReferral = () => {
  const data: any = AxiosHook(
    'https://static.adbrix.io/front/coding-test/event_2.json'
  );
  return <PiecChart />;
};

export default PieOfTopReferral;
