import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Divider,
  HStack,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import apiClient from "../services/api-client";

interface PaymentResult {
  enrollmentId: number;
  success: boolean;
}

interface MakePaymentResponse {
  paymentResultList: PaymentResult[];
}

export interface PaymentInfo {
  enrollmentId: number;
  course: string;
  amount: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  paymentList: PaymentInfo[];
}

const PaymentModal = ({ isOpen, onClose, paymentList }: Props) => {
  const { userInfo } = useContext(UserContext);
  const [result, setResult] = useState<boolean>(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(true);
  const [loading, setLoading] = useState(false);

  const totalAmount = paymentList.reduce((acc, payment) => {
    return acc + payment.amount;
  }, 0);

  const handlePaymentModalClose = () => {
    onClose();
    setResult(false);
  };

  const handleMakePayment = () => {
    setLoading(true);
    const requestBody = {
      studentId: userInfo.id,
      enrollmentIdList: paymentList.map((e) => e.enrollmentId),
      amount: totalAmount,
    };

    apiClient
      .post<MakePaymentResponse>("/payment/make", requestBody)
      .then((res) => {
        setLoading(false);
        const paymentResult =
          res.data.paymentResultList.filter((result) => !result.success)
            .length == 0
            ? true
            : false;
      })
      .catch((err) => {
        setPaymentSuccessful(false);
        setLoading(false);
      });

    setResult(true);
    setPaymentSuccessful(true);
    setLoading(false);
  };

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading && <Spinner />}
          {!loading && result && (
            <Alert status={paymentSuccessful ? "success" : "error"}>
              <AlertIcon boxSize={10} />
              <VStack alignItems="flex-start">
                <AlertTitle>Payment Result</AlertTitle>
                <AlertDescription>
                  {paymentSuccessful
                    ? "Payment is done successfully."
                    : "Payment failed for some reason."}
                </AlertDescription>
              </VStack>
            </Alert>
          )}
          {!loading && !result && (
            <List>
              {paymentList.map((payment) => (
                <ListItem key={payment.enrollmentId}>
                  <HStack justifyContent="space-between">
                    <p>{payment.course}</p>
                    <p>{payment.amount}</p>
                  </HStack>
                </ListItem>
              ))}
              <Divider marginTop={3} />
              <ListItem>
                <HStack justify="space-between">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">{totalAmount}</Text>
                </HStack>
              </ListItem>
            </List>
          )}
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            isDisabled={result || totalAmount === 0}
            colorScheme="blue"
            onClick={handleMakePayment}
          >
            Make Payment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
