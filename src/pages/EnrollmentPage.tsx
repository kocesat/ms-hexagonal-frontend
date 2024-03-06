import { Button, Icon, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import EnrollmentTable from "../components/EnrollmentTable";
import useGetEnrollments from "../hooks/useGetEnrollments";
import EnrollmentMessage from "../components/EnrollmentMessage";

const EnrollmentPage = () => {
  const { enrollments, error } = useGetEnrollments();

  return (
    <VStack px={3} gap={2} alignItems="stretch" alignContent="center">
      <EnrollmentMessage />
      <Button
        onClick={() => console.log("open course selection modal")}
        colorScheme="gray"
        size="lg"
        leftIcon={<Icon as={FaPlus} />}
      >
        Add Enrollments
      </Button>
      <EnrollmentTable enrollments={enrollments} errorMessage={error} />
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
