// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Heading, Grid, GridItem, Circle, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const [turn, setTurn] = useState("white");

  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" mt={8}>
        Othello
      </Heading>

      <Box borderWidth={2} borderColor="gray.200" borderRadius="md" maxW="480px" mx="auto" mt={8}>
        <Grid templateColumns="repeat(8, 1fr)" gap={2}>
          {Array(64)
            .fill(null)
            .map((_, i) => (
              <GridItem key={i} w="100%" h="0" pb="100%" position="relative">
                <Circle size="90%" bg={(i >= 27 && i <= 36 && i % 2 === 0) || (i >= 35 && i <= 44 && i % 2 !== 0) ? "white" : "green.500"} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" />
              </GridItem>
            ))}
        </Grid>
      </Box>
      <Text textAlign="center" mt={4}>
        {turn === "white" ? "White's turn" : "Green's turn"}
      </Text>
    </>
  );
};

export default Index;
