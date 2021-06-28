import { useEffect, useState } from 'react';

const useFetch = (fetchFunc, params) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await fetchFunc(params);

      console.log({ fetchedData: data });

      setData(data);
      setLoading(false);
    }

    fetch();
  }, []);

  return { data, loading };
};

export default useFetch;
