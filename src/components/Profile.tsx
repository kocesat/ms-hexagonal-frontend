import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import UserContextProvider, {
  UserContext,
  UserContextType,
} from "../context/UserContext";
import StudentSelector from "./StudentSelector";
import { Student } from "../hooks/useGetStudents";

interface UserInfoForm {
  student?: Student;
  year: string;
  semester: string;
}

const Profile = () => {
  const { userInfo, setUserContext } = useContext(UserContext);
  const [form, setForm] = useState<UserInfoForm>({
    year: userInfo.year.toString(),
    semester: userInfo.semester.toString(),
  });
  const { onOpen, onClose, isOpen } = useDisclosure();
  const semesterInfo: string = userInfo.year + "/" + userInfo.semester;

  const handleSave = () => {
    if (form.student) {
      setUserContext({
        id: form.student.id,
        name: form.student.name,
        year: parseInt(form.year),
        semester: parseInt(form.semester),
      });
    }
    onClose();
  };

  const handleStudentSelect = (student: Student) => {
    setForm({ ...form, student });
  };

  const saveEnabled = form.student && form.year && form.semester;

  return (
    <HStack paddingX={5}>
      <Box
        display="inline-block"
        mr={2}
      >{`${userInfo.name} - ${semesterInfo}`}</Box>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            size="sm"
            colorScheme="blue"
            icon={<FaUserEdit />}
            aria-label={""}
          />
        </PopoverTrigger>
        <PopoverContent>
          <Stack spacing={4} p={6}>
            <FormControl>
              <StudentSelector
                selectedStudent={form.student}
                onStudentSelect={handleStudentSelect}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                type="number"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Semester</FormLabel>
              <Input
                value={form.semester}
                onChange={(e) => setForm({ ...form, semester: e.target.value })}
                type="number"
              />
            </FormControl>
            <ButtonGroup display="flex" justifyContent="flex-end">
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
              <Button isDisabled={!saveEnabled} onClick={handleSave}>
                Save
              </Button>
            </ButtonGroup>
          </Stack>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};

export default Profile;
