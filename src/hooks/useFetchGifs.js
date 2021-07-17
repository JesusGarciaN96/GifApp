import { useState, useEffect } from 'react';

import { getGifs } from '../utils/getGifs';

export const useFetchGifs = category => {
  const [initialState, setInitialState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getGifs(category);
        setInitialState({
          data,
          loading: false,
        });
      } catch (ex) {
        console.log(ex);
      }
    })();
  }, []);
  return initialState;
};
