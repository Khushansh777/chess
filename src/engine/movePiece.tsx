import { useState } from "react";
import { getInfo, type InfoProps } from "./moveGenerator";

const [selected, setSelected] = useState<{
  rindex: number;
  cindex: number;
} | null>(null);
const [board, setBoard] = useState<string[][]>();
const [info, setInfo] = useState<InfoProps>();

export const getInfoFromSquare = ({
  rindex,
  board,
  cindex,
  column,
}: InfoProps) => {
  getInfo({ rindex, cindex, board, column });
  setInfo({ rindex, board, cindex, column });
  setBoard(board);
  return setSelected({ rindex, cindex });
};
const [moves, setMoves] = useState(getInfoFromSquare());
