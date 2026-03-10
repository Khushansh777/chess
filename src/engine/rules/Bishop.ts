type props = {
  col: number;
  row: number;
};

export const Bishop = ({ row, col }: props) => {
  const directions: [number, number][] = [];
  let r = row;
  let c = col;
  const vectors: [number, number][] = [
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  vectors.forEach((vec) => {
    r = r + vec[0];
    c = c + vec[1];

    while (r <= 7 && c <= 7 && r >= 0 && c >= 0) {
      directions.push([r, c]);
      r += vec[0];
      c += vec[1];
    }
  });

  return directions;
};
