import { King } from "./rules/King";
import { Bishop } from "./rules/Bishop";
import { Pawn } from "./rules/Pawn";
import { Queen } from "./rules/Queen";
import { Rook } from "./rules/Rook";
import { Knight } from "./rules/Knight";

export type InfoProps = {
  rindex: number;
  cindex: number;
  column: string;
  board: string[][];
};

// will select which peice rule to run
export const getSelectRules = ({
  rindex,
  cindex,
  column,
  board,
}: InfoProps): number[][] => {
  const col: number = cindex;
  const row: number = rindex;

  const pieces = {
    p: Pawn,
    r: Rook,
    n: Knight,
    b: Bishop,
    q: Queen,
    k: King,
    "": null,
  };

  const ComponentToRender = pieces[column[1] as keyof typeof pieces];
  if (!ComponentToRender) return [];
  return ComponentToRender({ row, col, board });
};
