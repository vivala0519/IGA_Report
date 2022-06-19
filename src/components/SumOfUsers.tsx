import React, { useEffect, useState } from 'react';
import HookForEvent1 from '../hooks/HookForEvent1';
import Sum from '../chart/Sum';

const SumOfUsers = () => {
  const data: any = HookForEvent1();
  const [total, setTotal] = useState(0);
  const [difference, setDifference] = useState(0);
  useEffect(() => {
    if (data) {
      let temp = 0;
      for (const item of data) {
        temp += parseInt(item[1]);
      }
      setTotal(temp);

      const diffTemp = data.pop()[1] - data.pop()[1];
      setDifference(diffTemp);
    }
  }, [data]);

  return (
    <Sum
      title="접속유저"
      subtitle="Unique Event Count"
      total={total}
      difference={difference}
    />
  );
};

export default SumOfUsers;
