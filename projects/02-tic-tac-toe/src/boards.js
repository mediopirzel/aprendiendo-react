import { WINNER_COMBOS } from './constants';

export const checkWinnerFrom = (boardToCheck) => {
  // revisem les convinacions guanyadores per saber si guanya x o i
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hi ha guanyador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
