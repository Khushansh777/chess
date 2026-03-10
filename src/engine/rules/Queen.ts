import { Bishop } from "./Bishop";
import { Rook } from "./Rook";

type props = {
  col: number;
  row: number;
};

export const Queen = ({ row, col }: props) => {
  const directions: [number, number][] = [];
  directions.push(...Bishop({ row, col }));
  directions.push(...Rook({ row, col }));

  return directions;
};
