import {
  Badge,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Enrollment } from "../hooks/useGetEnrollments";

const statusColorMap: { [key: string]: string } = {
  RESERVED: "blue",
  PAYMENT_IN_PROCESS: "teal",
  PAYMENT_FAILED: "orange",
  TECHNICAL_ERROR: "red",
  SUCCESSFUL: "green",
};

interface Props {
  enrollments: Enrollment[];
  errorMessage?: string;
  isLoading?: boolean;
}

const EnrollmentTable = ({
  enrollments,
  errorMessage = "",
  isLoading = false,
}: Props) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <TableContainer paddingX={3}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Course Code</Th>
              <Th>Course Name</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {enrollments.map((enrollment) => (
              <Tr key={enrollment.id}>
                <Td>{enrollment.courseCode}</Td>
                <Td>{enrollment.courseName}</Td>
                <Td>
                  <Badge
                    borderRadius={5}
                    colorScheme={statusColorMap[enrollment.enrollmentStatus]}
                  >
                    {enrollment.enrollmentStatus}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EnrollmentTable;
