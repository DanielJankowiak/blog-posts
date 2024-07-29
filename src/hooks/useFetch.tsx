import { useState, useEffect } from 'react';
import axios from 'axios';

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string;
}

function useFetch <T>(url: string): UseFetchResult<T>  {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<T>(url);
        setData(res.data);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;