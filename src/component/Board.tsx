import Square from "./Square";
type props = {
  board: string[][];
};
const Board = ({ board }: props) => {
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
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
