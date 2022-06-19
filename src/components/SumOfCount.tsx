import React, { useEffect, useState } from 'react';
import AxiosHook from '../AxiosHook';
import Sum from '../chart/Sum';

const SumOfCount = () => {
  const data: any = AxiosHook(
    'https://static.adbrix.io/front/coding-test/event_1.json'
  );
  const [total, setTotal] = useState(0);
  const [difference, setDifference] = useState(0);
  useEffect(() => {
    if (data) {
      const row = data.rows;
      let temp = 0;
      for (const item of row) {
        temp += parseInt(item[2]);
      }
      setTotal(temp);
      row.sort();
      console.log(row);

      const diffTemp = row.pop()[2] - row.pop()[2];
      setDifference(diffTemp);
    }
  }, [data]);

  return (
    <Sum
      title="접속횟수"
      subtitle="Total Event Count"
      total={total}
      difference={difference}
    />
  );
};

export default SumOfCount;
