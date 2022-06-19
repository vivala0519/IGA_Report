import React, { useState, useEffect } from 'react';
import HookForEvent1 from '../hooks/HookForEvent1';
import SerialChart from '../chart/SerialChart';

const DAU = () => {
  const data: any = HookForEvent1();
  const labels: any = [];
  const lineData: any = [];
  const barData: any = [];

  // useEffect(() => {
  if (data) {
    for (const item of data) {
      labels.push(item[0].slice(5));
      lineData.push(item[1]);
      barData.push(item[2]);
    }
  }
  // }, [data]);

  return <SerialChart labels={labels} lineData={lineData} barData={barData} />;
};

export default DAU;
