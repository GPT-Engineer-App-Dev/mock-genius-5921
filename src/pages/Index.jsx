// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Heading, Grid, GridItem, Circle, Box, Text } from "@chakra-ui/react";

const BOARD_SIZE = 8;

const Index = () => {
  const [board, setBoard] = useState(createInitialBoard());
  const [turn, setTurn] = useState("white");

  function createInitialBoard() {
    const board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    board[3][3] = board[4][4] = "white";
    board[3][4] = board[4][3] = "green";
    return board;
  }

  function isValidMove(board, row, col, color) {
   
    return false;
  }

  function flipDiscs(board, row, col, color) {
   
    return board;
  }

  function clickCell(row, col) {
    if (board[row][col] || !isValidMove(board, row, col, turn)) {
      return;
    }
    
    const newBoard = flipDiscs([...board], row, col, turn);
    newBoard[row][col] = turn;
    setBoard(newBoard);
    setTurn(turn === "white" ? "green" : "white");
   
  }

  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" mt={8}>
        Othello
      </Heading>

      <Box borderWidth={2} borderColor="gray.200" borderRadius="md" maxW="480px" mx="auto" mt={8}>
        <Grid templateColumns="repeat(8, 1fr)" gap={2}>
          {board.map((row, rowIndex) => 
            row.map((cell, colIndex) => (
              <GridItem 
                key={`${rowIndex}-${colIndex}`} 
                w="100%" 
                h="0" 
                pb="100%" 
                position="relative"
                onClick={() => clickCell(rowIndex, colIndex)}
                cursor="pointer"
              >
                <Circle 
                  size="90%" 
                  bg={cell === "white" ? "white" : cell === "green" ? "green.500" : "green.100"}
                  position="absolute" 
                  top="50%" 
                  left="50%" 
                  transform="translate(-50%, -50%)"
                />
              </GridItem>
            )))}
        </Grid>
      </Box>
      <Text textAlign="center" mt={4}>
        {turn === "white" ? "White's turn" : "Green's turn"}
      </Text>
    </>
  );
};

export default Index;
