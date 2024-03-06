import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const EnrollmentMessage = () => {
  return (
    <Alert status="info">
      <AlertIcon />
      <AlertTitle>Enrollment Information</AlertTitle>
      <AlertDescription>
        You have no uncomplete courses. Go ahaed and enjoy your classes
      </AlertDescription>
    </Alert>
  );
};

export default EnrollmentMessage;
