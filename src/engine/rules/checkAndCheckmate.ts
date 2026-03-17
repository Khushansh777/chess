import { getSelectRules, type InfoProps } from "../moveGenerator";
import { getColor } from "../utils/getColor";

export const findKing = (
  board: string[][],
  color: string,
): [number, number] | undefined => {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === `${color[0]}k`) return [r, c];
    }
  }
  return undefined;
};

export const isInCheck = (board: string[][], color: string): boolean => {
  const kingPos = findKing(board, color);
  if (!kingPos) return false;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const piece = board[r][c];
      if (piece === "" || getColor(piece) === color) continue;

      const moves = getSelectRules({
        rindex: r,
        cindex: c,
        column: piece,
        board,
      });

      if (moves.some(([mr, mc]) => mr === kingPos[0] && mc === kingPos[1])) {
        return true;
      }
    }
  }
  return false;
};

export const getLegalMoves = (info: InfoProps): number[][] => {
  const rawMoves = getSelectRules(info);
  const color = getColor(info.column);

  return rawMoves.filter(([row, col]) => {
    const newBoard = info.board.map((r) => [...r]);
    newBoard[row][col] = newBoard[info.rindex][info.cindex];
    newBoard[info.rindex][info.cindex] = "";

    return !isInCheck(newBoard, color);
  });
};

export const isCheckmate = (board: string[][], color: string): boolean => {
  if (!isInCheck(board, color)) return false;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const piece = board[r][c];
      if (piece === "" || getColor(piece) !== color) continue;

      const moves = getLegalMoves({
        rindex: r,
        cindex: c,
        column: piece,
        board,
      });
      if (moves.length > 0) return false;
    }
  }
  return true;
};
