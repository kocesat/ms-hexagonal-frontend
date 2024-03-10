import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Props {
  endpoint: string; 
  requestConfig?: AxiosRequestConfig;
  deps?: any; 
}

const useFetchData = <T>({endpoint, requestConfig, deps}: Props) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setLoading(false);
        setError(err.message);
      });

      return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useFetchData;