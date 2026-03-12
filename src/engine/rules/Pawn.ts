import { getColor } from "../utils/getColor";
type props = {
  row: number;
  col: number;
  board: string[][];
};

export const Pawn = ({ row, col, board }: props) => {
  console.log(board);
  const directions: number[][] = [];
  const color = getColor(board[row][col]);
  let move: [number, number];
  if (row === 1 || row === 6) {
    move = color === "white" ? [0, -2] : [0, 2];
    directions.push(move);
  } else {
    move = color === "white" ? [0, -1] : [0, 1];
    directions.push(move);
  }
  return directions;
};
