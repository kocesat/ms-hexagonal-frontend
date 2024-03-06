import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
          <GridItem area="leftside" bgColor="dodgerblue">
            leftSide
          </GridItem>
        </Show>
        <GridItem area="main" bgColor="olivedrab">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
