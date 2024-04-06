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
      <SimpleGrid columns={8} spacing={0}>
        {board.map((row, rowIdx) => row.map((cell, colIdx) => <Center key={`${rowIdx}-${colIdx}`} w="50px" h="50px" bg={cell === 0 ? "green.200" : cell === 1 ? "white" : "black"} onClick={() => placePiece(rowIdx, colIdx)} />))}
      </SimpleGrid>
      <Box mt={4}>Current Player: {player}</Box>
    </Box>
  );
};

export default Othello;
