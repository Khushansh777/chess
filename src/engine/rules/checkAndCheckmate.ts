type props = {
  row: number;
  col: number;
  board: string;
  directions: number[][];
};

const isKing = (boardState: string[][]): [number, number] | undefined => {
  for (let rindex: number = 0; rindex < boardState.length; rindex++) {
    for (let cindex: number = 0; cindex < boardState[rindex].length; cindex++) {
      return boardState[rindex][cindex] === "k" ? [rindex, cindex] : undefined;
    }
  }
};
