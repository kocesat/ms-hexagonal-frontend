import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import EnrollmentPage from "./pages/EnrollmentPage";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
