import { getColor } from "../utils/getColor";

type Props = {
  row: number;
  col: number;
  board: string[][];
};

export const Pawn = ({ row, col, board }: Props) => {
  const moves: number[][] = [];
  const color = getColor(board[row][col]);

  const direction = color === "white" ? -1 : 1;

  const oneStep = row + direction;
  if (oneStep >= 0 && oneStep < 8 && board[oneStep][col] === "") {
    moves.push([oneStep, col]);

    const isStartingRank =
      (color === "white" && row === 6) || (color === "black" && row === 1);
    const twoStep = row + direction * 2;
    if (isStartingRank && board[twoStep][col] === "") {
      moves.push([twoStep, col]);
    }
  }

  for (const colOffset of [-1, 1]) {
    const captureCol = col + colOffset;
    if (captureCol >= 0 && captureCol < 8 && oneStep >= 0 && oneStep < 8) {
      const target = board[oneStep][captureCol];
      if (target !== "" && getColor(target) !== color) {
        moves.push([oneStep, captureCol]);
      }
    }
  }

  return moves;
};
