import React from "react";
import Peice from "./Peice";
type props = {
  column: string;
  cindex: number;
  rindex: number;
  isClicked: { rindex: number; cindex: number } | null;
  setIsClicked: React.Dispatch<
    React.SetStateAction<{ rindex: number; cindex: number } | null>
  >;
};

const Square = ({ column, cindex, rindex, isClicked, setIsClicked }: props) => {
  const isSelected: boolean =
    isClicked?.cindex === cindex && isClicked?.rindex === rindex;

  const color: string =
    (rindex + cindex) % 2 === 0 ? "bg-white text-black" : "bg-black text-white";
  console.log(rindex, cindex);
  return (
    <div
      key={cindex}
      className={`flex items-center justify-center w-full h-full text-5xl cursor-pointer
        ${isSelected ? "bg-red-500" : color}
      `}
      onClick={() => {
        setIsClicked((prev) =>
          prev?.cindex === cindex && prev?.rindex === rindex
            ? null
            : { rindex: rindex, cindex: cindex },
        );
      }}
    >
      <Peice key={`${rindex}-${cindex}`} column={column} />
    </div>
  );
};

export default Square;
