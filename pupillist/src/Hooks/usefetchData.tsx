import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { UseAxiosProps } from '../Types/AxiosProps';

const useFetchData = <T = unknown>(config: AxiosRequestConfig): UseAxiosProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<T> = await axios.request(config);
        console.log(response.data)
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
