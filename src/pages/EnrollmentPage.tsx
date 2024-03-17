import {
  AlertStatus,
  Button,
  Icon,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import EnrollmentTable from "../components/EnrollmentTable";
import useGetEnrollments from "../hooks/useGetEnrollments";
import EnrollmentMessage from "../components/EnrollmentMessage";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import AddEnrollmentModal from "../components/AddEnrollmentModal";
import { CourseOffer } from "../hooks/useGetCourseOffers";
import apiClient from "../services/api-client";

interface AddEnrollmentResponse {
  id: number;
  status: string;
}

const EnrollmentPage = () => {
  const { userInfo } = useContext(UserContext);
  const {
    data,
    error,
    isLoading,
    refetch: refetchEnrollments,
  } = useGetEnrollments(userInfo);
  const [addEnrollmentLoading, setAddEnrollmentLoading] = useState(false);
  const [addEnrollmentError, setAddEnrollmentError] = useState("");
  const [courseSelectModalOpen, setCourseSelectModalOpen] = useState(false);

  const enrollmentInformation = () => {
    if (data.length === 0) {
      return { message: "No courses taken yet.", status: "info" };
    }

    const uncompleteCount = data.filter(
      (enrollment) => enrollment.enrollmentStatus !== "SUCCESSFUL"
    ).length;
    if (uncompleteCount > 0) {
      const message = "You have uncomplete courses. Please go to make payment";
      const status = "warning";
      return { message, status };
    }
    const message = "You have no uncomplete courses. Go enjoy your classes!";
    const status = "success";
    return { message, status };
  };

  const closeCourseSelectModal = () => {
    setCourseSelectModalOpen(false);
  };

  const openCourseSelectModal = () => {
    setCourseSelectModalOpen(true);
    setAddEnrollmentError("");
  };

  const handleCourseSelect = (courseOffer: CourseOffer) => {
    const requestBody = {
      courseOfferId: courseOffer.id,
      studentId: userInfo.id,
      year: userInfo.year,
      semester: userInfo.semester,
      status: 0,
    };

    setAddEnrollmentLoading(true);
    apiClient
      .post<AddEnrollmentResponse>("/enrollment", requestBody)
      .then((res) => {
        setAddEnrollmentLoading(false);
        closeCourseSelectModal();
        refetchEnrollments();
      })
      .catch((err) => {
        setAddEnrollmentLoading(false);
        setAddEnrollmentError(err.response.data.message);
      });
  };

  return (
    <VStack px={3} gap={2} alignItems="stretch" alignContent="center">
      {error && <p>{error}</p>}
      <EnrollmentMessage
        message={enrollmentInformation().message}
        status={enrollmentInformation().status as AlertStatus}
      />

      <Button
        onClick={openCourseSelectModal}
        colorScheme="gray"
        size="lg"
        leftIcon={<Icon as={FaPlus} />}
      >
        Add Enrollments
      </Button>
      <AddEnrollmentModal
        isOpen={courseSelectModalOpen}
        onClose={closeCourseSelectModal}
        onCourseSelect={handleCourseSelect}
        isLoading={addEnrollmentLoading}
        error={addEnrollmentError}
      />
      <EnrollmentTable
        isLoading={isLoading}
        enrollments={data}
        errorMessage={error}
      />

      <Button
        onClick={() => console.log("go to payment")}
        colorScheme="gray"
        size="lg"
        leftIcon={<Icon as={MdPayments} />}
      >
        Continue
      </Button>
    </VStack>
  );
};

export default EnrollmentPage;
