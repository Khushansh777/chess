import Square from "./Square";
import { getSelectRules } from "../engine/moveGenerator";
import { useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  board: string[][];
  perspective: "white" | "black";
  changePerspective: () => void;
};

const Board = ({ board, perspective, changePerspective }: Props) => {
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
        changePerspective();
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
    }
  };

  const displayRows =
    perspective === "black" ? [...boardState].reverse() : boardState;

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-[700px] h-[700px] border">
      {displayRows.map((row, rindex) => {
        const displayRow = perspective === "black" ? [...row].reverse() : row;
        return displayRow.map((piece, cindex) => {
          const realRindex = perspective === "black" ? 7 - rindex : rindex;
          const realCindex = perspective === "black" ? 7 - cindex : cindex; // ✅ fixed condition
          const isSelected =
            selected?.rindex === realRindex && selected?.cindex === realCindex; // ✅
          const isValidMove = moves.some(
            ([mr, mc]) => mr === realRindex && mc === realCindex,
          ); // ✅
          return (
            <Square
              key={`${realRindex}-${realCindex}`}
              column={piece}
              rindex={realRindex}
              cindex={realCindex} // ✅ fixed copy-paste
              isSelected={isSelected}
              isValidMove={isValidMove}
              handleClick={handleClick}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
