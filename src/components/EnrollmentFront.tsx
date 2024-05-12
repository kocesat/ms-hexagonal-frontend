import {
  Box,
  Text,
  Card,
  CardBody,
  Button,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
} from "@chakra-ui/react";

const EnrollmentFront = () => (
  <Box>
    <Card>
      <CardBody>
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <Box>
            <StatGroup justifyContent="center" alignItems="center" gap={3}>
              <Stat minW="100px">
                <StatLabel>Enrolled courses</StatLabel>
                <StatNumber>3</StatNumber>
              </Stat>
              <Stat minW="200px">
                <StatLabel>Uncomplete courses</StatLabel>
                <StatNumber>0</StatNumber>
              </Stat>
            </StatGroup>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  </Box>
);

export default EnrollmentFront;
