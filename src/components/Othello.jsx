import React, { useState } from "react";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";

const Othello = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [player, setPlayer] = useState(1);

  const placePiece = (row, col) => {
    if (board[row][col] === 0) {
      const newBoard = [...board];
      newBoard[row][col] = player;
      setBoard(newBoard);
      setPlayer(player === 1 ? 2 : 1);
    }
  };

  return (
    <Box>
      <Box bg="gray.100" p={4} borderRadius="lg" boxShadow="md">
        <SimpleGrid columns={8} spacing={2}>
          {board.map((row, rowIdx) =>
            row.map((cell, colIdx) => (
              <Box key={`${rowIdx}-${colIdx}`} w="50px" h="50px" bg="linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)" borderRadius="md" boxShadow="md" onClick={() => placePiece(rowIdx, colIdx)} display="flex" alignItems="center" justifyContent="center">
                {cell !== 0 && <Box w="80%" h="80%" borderRadius="50%" bg={cell === 1 ? "green.500" : "white"} opacity={0.8} />}
              </Box>
            )),
          )}
        </SimpleGrid>
      </Box>
      <Box mt={4}>Current Player: {player}</Box>
    </Box>
  );
};

export default Othello;
