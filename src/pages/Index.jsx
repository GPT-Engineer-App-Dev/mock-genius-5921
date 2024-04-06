// Complete the Index page component here
// Use chakra-ui
import { Heading, Grid, GridItem, Circle } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" mt={8}>
        Othello
      </Heading>

      <Grid templateColumns="repeat(8, 1fr)" gap={2} maxW="480px" mx="auto" mt={8}>
        {Array(64)
          .fill(null)
          .map((_, i) => (
            <GridItem key={i} w="100%" h="0" pb="100%" position="relative">
              <Circle size="80%" bg={(i >= 27 && i <= 36 && i % 2 === 0) || (i >= 35 && i <= 44 && i % 2 !== 0) ? "white" : "green.500"} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default Index;
