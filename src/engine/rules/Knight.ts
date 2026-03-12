import { getColor } from "../utils/getColor";
type props = {
  row: number;
  col: number;
  board: string[][];
};

export const Knight = ({ row, col, board }: props) => {
  const directions: number[][] = [];
  const vectors: number[][] = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  vectors.forEach((vec: number[]) => {
    const r: number = row + vec[0];
    const c: number = col + vec[1];
    if (r < 0 || r > 7 || c < 0 || c > 7) {
      return;
    } else if (board[r][c] === "") {
      directions.push([r, c]);
    } else if (getColor(board[r][c]) !== getColor(board[row][col])) {
      directions.push([r, c]);
      return;
    } else {
      return;
    }
  });
  return directions;
};
