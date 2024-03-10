import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useGetStudents, { Student } from "../hooks/useGetStudents";

interface Props {
  selectedStudent?: Student | null;
  onStudentSelect: (student: Student) => void;
}

const StudentSelector = ({ onStudentSelect, selectedStudent }: Props) => {
  const { data, error } = useGetStudents();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedStudent ? selectedStudent.name : "Select Student"}
      </MenuButton>
      <MenuList>
        {data.map((student) => (
          <MenuItem onClick={() => onStudentSelect(student)} key={student.id}>
            {student.name + " " + student.surname}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default StudentSelector;
