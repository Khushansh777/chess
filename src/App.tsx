import Board from "./component/Board";

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
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Board board={INITIAL_BOARD} />
    </div>
  );
};

export default App;
