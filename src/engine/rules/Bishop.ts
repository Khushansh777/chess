import { getColor } from "../utils/getColor";

type props = {
  col: number;
  row: number;
  board: string[][];
};

export const Bishop = ({ row, col, board }: props) => {
  const directions: [number, number][] = [];
  const color: string = getColor(board[row][col]);
  const vectors: [number, number][] = [
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  vectors.forEach((vec) => {
    let r = row + vec[0];
    let c = col + vec[1];
    const dirColor = getColor(board[r][c]);
    while (r <= 7 && c <= 7 && r >= 0 && c >= 0) {
      if (board[r][c] === "") {
        directions.push([r, c]);
      } else if (dirColor !== color) {
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
