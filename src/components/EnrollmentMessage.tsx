import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertStatus,
  AlertTitle,
} from "@chakra-ui/react";

interface Props {
  message: string;
  status?: AlertStatus;
}

const EnrollmentMessage = ({ message, status = "info" }: Props) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>Enrollment Information</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default EnrollmentMessage;
