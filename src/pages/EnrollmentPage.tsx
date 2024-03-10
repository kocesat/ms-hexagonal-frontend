import { Button, Icon, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import EnrollmentTable from "../components/EnrollmentTable";
import useGetEnrollments from "../hooks/useGetEnrollments";
import EnrollmentMessage from "../components/EnrollmentMessage";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const EnrollmentPage = () => {
  const { userInfo } = useContext(UserContext);
  const { data, error } = useGetEnrollments(userInfo);

  return (
    <VStack px={3} gap={2} alignItems="stretch" alignContent="center">
      {error && <p>{error}</p>}
      <EnrollmentMessage />

      <Button
        onClick={() => console.log("open course selection modal")}
        colorScheme="gray"
        size="lg"
        leftIcon={<Icon as={FaPlus} />}
      >
        Add Enrollments
      </Button>

      <EnrollmentTable enrollments={data} errorMessage={error} />

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
