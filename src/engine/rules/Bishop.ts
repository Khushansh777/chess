import { getColor } from "../utils/getColor";

type props = {
  col: number;
  row: number;
  board: string[][];
};

export const Bishop = ({ row, col, board }: props) => {
  console.log(board);
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

    while (true) {
      if (r < 0 || r > 7 || c < 0 || c > 7) break;

      if (board[r][c] === "") {
        directions.push([r, c]);
      } else {
        const targetColor = getColor(board[r][c]);

        if (targetColor !== color) {
          directions.push([r, c]);
        }

        break;
      }

      r += vec[0];
      c += vec[1];
    }
  });

  return directions;
};
