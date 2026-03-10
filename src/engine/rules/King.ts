type props = {
  row: number;
  col: number;
};

export const King = ({ row, col }: props) => {
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
    if (r >= 0 && c >= 0 && r <= 7 && c <= 7) {
      directions.push([r, c]);
    }
  });
  return directions;
};
