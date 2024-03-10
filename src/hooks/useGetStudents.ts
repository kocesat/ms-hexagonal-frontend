import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Student {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
}

export interface StudentListResponse {
  count: number;
  results: Student[];
}

const useGetStudents = () => {
  const [data, setData] = useState<Student[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<StudentListResponse>("/student", { signal: controller.signal })
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
  }, []);

  return {data, error, isLoading};
}

export default useGetStudents;