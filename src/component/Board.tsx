import Square from "./Square";
import { getSelectRules } from "../engine/moveGenerator";
import { useState } from "react";

type Props = {
  board: string[][];
};

const Board = ({ board }: Props) => {
  const [boardState, setBoardState] = useState(board);
  const [selected, setSelected] = useState<{
    rindex: number;
    cindex: number;
  } | null>(null);
  const [moves, setMoves] = useState<number[][]>([]);

  const handleClick = (rindex: number, cindex: number) => {
    if (selected) {
      const valid = moves.some(([mr, mc]) => mr === rindex && mc === cindex);
      if (valid) {
        const newBoard = boardState.map((row) => [...row]);
        newBoard[rindex][cindex] = newBoard[selected.rindex][selected.cindex];
        newBoard[selected.rindex][selected.cindex] = "";
        setBoardState(newBoard);
        setSelected(null);
        setMoves([]);
        return;
      }

      if (boardState[rindex][cindex] !== "") {
        const possibleMoves = getSelectRules({
          rindex,
          cindex,
          column: boardState[rindex][cindex],
          board: boardState,
        });
        setSelected({ rindex, cindex });
        setMoves(possibleMoves);
        return;
      }

      // Clicked an empty invalid square → deselect
      setSelected(null);
      setMoves([]);
      return;
    }

    // Nothing selected yet — select a piece
    if (boardState[rindex][cindex] !== "") {
      const possibleMoves = getSelectRules({
        rindex,
        cindex,
        column: boardState[rindex][cindex],
        board: boardState,
      });
      setSelected({ rindex, cindex });
      setMoves(possibleMoves);
    }
  };

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-[700px] h-[700px] border">
      {boardState.map((row, rindex) =>
        row.map((piece, cindex) => {
          const isSelected =
            selected?.rindex === rindex && selected?.cindex === cindex;
          const isValidMove = moves.some(
            ([mr, mc]) => mr === rindex && mc === cindex,
          );

          return (
            <Square
              key={`${rindex}-${cindex}`}
              column={piece}
              rindex={rindex}
              cindex={cindex}
              isSelected={isSelected}
              isValidMove={isValidMove}
              handleClick={handleClick}
            />
          );
        }),
      )}
    </div>
  );
};

export default Board;
