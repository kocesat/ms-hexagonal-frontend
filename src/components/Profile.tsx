import { Badge, Button, HStack, Icon } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

export interface Props {
  name?: string;
  year?: number;
  semester?: number;
}

const Profile = ({ name = "Student", year = 2024, semester = 2 }: Props) => {
  const semesterInfo: string = year + "/" + semester;

  return (
    <HStack paddingX={5}>
      <Badge>{name}</Badge>
      <Badge>{semesterInfo}</Badge>
      <Icon
        as={FaEdit}
        color="blue"
        onClick={() => console.log("Edit profile clicked!")}
      />
    </HStack>
  );
};

export default Profile;
