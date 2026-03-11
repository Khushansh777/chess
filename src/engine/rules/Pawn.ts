import { color } from "../moveGenerator";
type props = {
  row: number;
  col: number;
};

export const Pawn = ({ row, col }: props) => {
  const directions: number[][] = [];
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
