import { getColor } from "../utils/getColor";
type props = {
  col: number;
  row: number;
  board: string[][];
};

export const Rook = ({ row, col, board }: props) => {
  const directions: [number, number][] = [];

  const vectors: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  vectors.forEach((vec) => {
    let r = row + vec[0];
    let c = col + vec[1];
    while (true) {
      if (r < 0 || r > 7 || c < 0 || c > 7) break;
      if (board[r][c] === "") {
        directions.push([r, c]);
      } else if (getColor(board[r][c]) !== getColor(board[row][col])) {
        directions.push([r, c]);
        break;
      } else {
        break;
      }
      r += vec[0];
      c += vec[1];
    }
  });

  return directions;
};
