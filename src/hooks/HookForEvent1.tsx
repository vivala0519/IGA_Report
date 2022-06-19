import React, { useEffect, useState } from 'react';
import AxiosHook from './AxiosHook';

const HookForEvent1 = () => {
  const [returnData, setReturnData] = useState<any>();
  const data: any = AxiosHook(
    'https://static.adbrix.io/front/coding-test/event_1.json'
  );

  useEffect(() => {
    if (data) {
      const row = data.rows;
      row.sort();
      setReturnData(row);
    }
  }, [data]);

  return returnData;
};

export default HookForEvent1;
