import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Prens App</Text>
      </HStack>
      <HStack>
        <Profile />
      </HStack>
    </HStack>
  );
};

export default Navbar;
