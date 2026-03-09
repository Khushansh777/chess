import { useEffect } from "react";
import Board from "../component/Board";
type props = {
  initBoard: (name: string[][]) => void;
  board: string[][];
};
const InitialBoard = ({ initBoard, board }: props) => {
  const boardArray: string[][] = [
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
  ];

  useEffect(() => {
    initBoard(boardArray);
  }, []);
  return (
    <div>
      <Board board={board} />
    </div>
  );
};

export default InitialBoard;
