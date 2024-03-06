import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Enrollment {
  id: number;
  year: number;
  semester: number;
  courseCode: string;
  courseName: string;
  enrollmentStatus: string;
  paymentAmount: number;
}

export interface EnrollmentListResponse {
  enrollmentList: Enrollment[];
}

const useGetEnrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .post<EnrollmentListResponse>("/enrollment/list",
      {
        studentId: 1,
        year: 2024,
        semester: 2,
      }, { signal: controller.signal })
      .then((res) => {
        setEnrollments(res.data.enrollmentList);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return {enrollments, error, setError};
}

export default useGetEnrollments;