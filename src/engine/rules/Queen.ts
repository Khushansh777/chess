import { Bishop } from "./Bishop";
import { Rook } from "./Rook";

type props = {
  col: number;
  row: number;
  board: string[][];
};

export const Queen = ({ row, col, board }: props) => {
  const directions: [number, number][] = [];
  directions.push(...Bishop({ row, col, board }));
  directions.push(...Rook({ row, col, board }));

  return directions;
};
