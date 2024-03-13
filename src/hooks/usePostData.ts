import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Props {
  endpoint: string; 
  requestBody?: any;
  deps?: any; 
}

const usePostData = <T>({endpoint, requestBody, deps}: Props) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .post<FetchResponse<T>>(endpoint, requestBody, { signal: controller.signal})
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

export default usePostData;