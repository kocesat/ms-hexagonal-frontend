import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useGetCourseOffers, { CourseOffer } from "../hooks/useGetCourseOffers";

interface Props {
  isOpen: boolean;
  error?: string;
  isLoading: boolean;
  onClose: () => void;
  onCourseSelect: (courseOffer: CourseOffer) => void;
}

const AddEnrollmentModal = ({
  isOpen,
  error: addEnrollmentError = "",
  isLoading: addEnrollmentLoading,
  onClose,
  onCourseSelect,
}: Props) => {
  const { userInfo } = useContext(UserContext);
  const { data, error, isLoading, refetch } = useGetCourseOffers(userInfo);

  const handleCourseOfferSelect = (courseOffer: CourseOffer) => {
    onCourseSelect(courseOffer);
  };

  const handleClose = () => {
    onClose();
    refetch();
  };

  const modalError = error || addEnrollmentError;
  const errorMsg = modalError ? (error ? error : addEnrollmentError) : "";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`Course Offers for ${userInfo.year} / ${userInfo.semester}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {modalError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{errorMsg}</AlertDescription>
            </Alert>
          )}
          {isLoading || (addEnrollmentLoading && <Spinner />)}
          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Course Code</Th>
                  <Th>Course Name</Th>
                  <Th>Instructor</Th>
                  <Th isNumeric>Remaining Capacity</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((offer) => (
                  <Tr key={offer.id}>
                    <Td>{offer.courseCode}</Td>
                    <Td>{offer.courseName}</Td>
                    <Td>{offer.instructor}</Td>
                    <Td isNumeric>{offer.quota - offer.countRegistered}</Td>
                    <Td>
                      <Button
                        rounded={10}
                        variant="outline"
                        onClick={() => handleCourseOfferSelect(offer)}
                        colorScheme="green"
                      >
                        Take
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddEnrollmentModal;
