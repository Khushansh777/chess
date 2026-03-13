import Peice from "./Peice";

type Props = {
  column: string;
  rindex: number;
  cindex: number;
  isSelected: boolean;
  isValidMove: boolean;
  handleClick: (rindex: number, cindex: number) => void;
};

const Square = ({
  column,
  rindex,
  cindex,
  isSelected,
  isValidMove,
  handleClick,
}: Props) => {
  const baseColor =
    (rindex + cindex) % 2 === 0 ? "bg-white text-black" : "bg-black text-white";

  const highlight = isSelected
    ? "bg-yellow-400 text-black"
    : isValidMove
      ? "bg-green-400 text-black"
      : baseColor;

  return (
    <div
      onClick={() => handleClick(rindex, cindex)}
      className={`relative flex items-center justify-center w-full h-full text-5xl cursor-pointer ${highlight}`}
    >
      <Peice column={column} />

      {isValidMove && !column && (
        <span className="absolute w-4 h-4 rounded-full bg-green-600 opacity-70" />
      )}
    </div>
  );
};

export default Square;
