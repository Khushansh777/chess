import { getColor } from "../utils/getColor";
type props = {
  row: number;
  col: number;
  board: string[][];
};

export const King = ({ row, col, board }: props) => {
  console.log(board);
  const directions: number[][] = [];
  const vectors: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  vectors.forEach((vector: number[]) => {
    const r: number = row + vector[0];
    const c: number = col + vector[1];
    if (r < 0 || r > 7 || c < 0 || c > 7) {
      return;
    } else if (board[r][c] === "") {
      directions.push([r, c]);
    } else if (getColor(board[r][c]) !== getColor(board[row][col])) {
      directions.push([r, c]);
    } else {
      return;
    }
  });
  return directions;
};
