import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import EnrollmentPage from "./pages/EnrollmentPage";
import UserContextProvider from "./context/UserContext";
import { useState } from "react";

const defaultUserInfo = { id: 1, name: "Esat", year: 2024, semester: 2 };

const App = () => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  return (
    <UserContextProvider
      value={{ userInfo, setUserContext: (userInfo) => setUserInfo(userInfo) }}
    >
      <Grid
        templateAreas={{
          base: `"nav" 
          "main"`,
          lg: `"nav nav" 
          "leftside main"`,
        }}
        gap={1}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="leftside">leftSide</GridItem>
        </Show>
        <GridItem area="main">
          <EnrollmentPage />
        </GridItem>
      </Grid>
    </UserContextProvider>
  );
};

export default App;
