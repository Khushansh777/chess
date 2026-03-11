import React from "react";
import Peice from "./Peice";
import { getInfo } from "../engine/moveGenerator";
type props = {
  column: string;
  cindex: number;
  rindex: number;
  isClicked: { rindex: number; cindex: number } | null;
  setIsClicked: React.Dispatch<
    React.SetStateAction<{ rindex: number; cindex: number } | null>
  >;
  board: string[][];
};
type getInfoProps = {
  rindex: number;
  cindex: number;
  column: string;
  board: string[][];
};
const Square = ({
  column,
  cindex,
  rindex,
  isClicked,
  setIsClicked,
  board,
}: props) => {
  const isSelected: boolean =
    isClicked?.cindex === cindex && isClicked?.rindex === rindex;
  // to set the color of square
  const color: string =
    (rindex + cindex) % 2 === 0 ? "bg-white text-black" : "bg-black text-white";
  // to transfer info and run setIsClicked simultaneously
  const getInfoAndSetIsClicked = ({
    rindex,
    cindex,
    column,
    board,
  }: getInfoProps) => {
    getInfo({ rindex, cindex, column, board });
    setIsClicked((prev) =>
      prev?.cindex === cindex && prev?.rindex === rindex
        ? null
        : { rindex: rindex, cindex: cindex },
    );
  };
  return (
    <div
      key={cindex}
      className={`flex items-center justify-center w-full h-full text-5xl cursor-pointer
        ${isSelected ? "bg-red-500" : color}
      `}
      onClick={() => {
        getInfoAndSetIsClicked({ rindex, cindex, column, board });
      }}
    >
      <Peice key={`${rindex}-${cindex}`} column={column} />
    </div>
  );
};

export default Square;
