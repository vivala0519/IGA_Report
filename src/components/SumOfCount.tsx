import React, { useEffect, useState } from 'react';
import HookForEvent1 from '../hooks/HookForEvent1';
import Sum from '../chart/Sum';

const SumOfCount = () => {
  const data: any = HookForEvent1();
  const [total, setTotal] = useState(0);
  const [difference, setDifference] = useState(0);
  useEffect(() => {
    if (data) {
      let temp = 0;
      for (const item of data) {
        temp += parseInt(item[2]);
      }
      setTotal(temp);

      const diffTemp = data.pop()[2] - data.pop()[2];
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
