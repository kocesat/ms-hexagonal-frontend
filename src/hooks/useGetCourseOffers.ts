import usePostData from "./usePostData";
import { UserInfo } from "../context/UserContext";

export interface CourseOffer {
  id: number;
  courseCode: string;
  courseName: string;
  instructor: string;
  departmentCode: string;
  quota: number;
  countRegistered: number;
  price: number;
}

const useGetCourseOffers = (userContext: UserInfo) => {
  
  const requestBody = { year: userContext.year, semester: userContext.semester, page: 1, pageSize: 100 };

  return usePostData<CourseOffer>({
    endpoint: "/course-offer",
    requestBody,
    deps: [userContext.year, userContext.semester]
  });
}

export default useGetCourseOffers;