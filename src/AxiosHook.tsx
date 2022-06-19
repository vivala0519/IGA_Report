import axios from 'axios';
import { useEffect, useState } from 'react';

const AxiosHook = (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return data;
};

export default AxiosHook;
