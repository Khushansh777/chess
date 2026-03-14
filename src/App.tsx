import Board from "./component/Board";
import { useState } from "react";
const INITIAL_BOARD: string[][] = [
  ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
];

const App = () => {
  const [perspective, setPerspective] = useState<"white" | "black">("white");
  const changePerspetive: () => void = () => {
    setPerspective(perspective === "white" ? "black" : "white");
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <button onClick={() => changePerspetive()}>{perspective}</button>
      <Board
        board={INITIAL_BOARD}
        perspective={perspective}
        changePerspective={changePerspetive}
      />
    </div>
  );
};

export default App;
