import { useState } from "react";
import InitialBoard from "./engine/InitialBoard";
import { Bishop } from "./engine/rules/Bishop";

const App = () => {
  const [board, setBoard] = useState<string[][]>([[]]);
  const initBoard = (array: string[][]) => {
    setBoard(array);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <InitialBoard initBoard={initBoard} board={board} />
      {/*console.log( console.log(
      <Bishop row={0} col={0} />) )*/}
    </div>
  );
};

export default App;
