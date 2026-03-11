import Square from "./Square";
import { useState } from "react";
type props = {
  board: string[][];
};
const Board = ({ board }: props) => {
  const [isClicked, setIsClicked] = useState<{
    rindex: number;
    cindex: number;
  } | null>(null);
  return (
    <div className="grid grid-cols-8 grid-rows-8 w-[700px] h-[700px] border">
      {board.map((r: string[], rindex: number) => {
        return r.map((c: string, cindex: number) => {
          return (
            <Square
              key={`${rindex}-${cindex}`}
              column={c}
              cindex={cindex}
              rindex={rindex}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              board={board}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
