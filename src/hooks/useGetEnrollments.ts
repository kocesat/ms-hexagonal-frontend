import usePostData from "./usePostData";
import { UserInfo } from "../context/UserContext";

export interface Enrollment {
  id: number;
  year: number;
  semester: number;
  courseCode: string;
  courseName: string;
  enrollmentStatus: string;
  paymentAmount: number;
}

const useGetEnrollments = (userContext: UserInfo) => {
  
  const requestBody = { studentId: userContext.id, year: userContext.year, semester: userContext.semester };

  return usePostData<Enrollment>({
    endpoint: "/enrollment/list",
    requestBody,
    deps: [userContext.id]
  });
}

export default useGetEnrollments;