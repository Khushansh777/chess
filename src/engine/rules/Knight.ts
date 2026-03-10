type props = {
  row: number;
  col: number;
};

export const Knight = ({ row, col }: props) => {
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
    if (r >= 0 && c >= 0 && r >= 7 && c >= 7) {
      directions.push([r, c]);
    }
  });
};
