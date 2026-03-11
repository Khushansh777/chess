type props = {
  col: number;
  row: number;
};

export const Rook = ({ row, col }: props) => {
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

    while (r <= 7 && c <= 7 && r >= 0 && c >= 0) {
      directions.push([r, c]);
      r += vec[0];
      c += vec[1];
    }
  });

  return directions;
};
