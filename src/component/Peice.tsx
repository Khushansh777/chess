type props = {
  column: string;
};
const Peice = ({ column }: props) => {
  const pieces: Record<string, string> = {
    wp: "♙",
    wr: "♖",
    wn: "♘",
    wb: "♗",
    wq: "♕",
    wk: "♔",

    bp: "♟",
    br: "♜",
    bn: "♞",
    bb: "♝",
    bq: "♛",
    bk: "♚",
  };
  return <div className="text-5xl cursor-pointer ">{pieces[column] || ""}</div>;
};

export default Peice;
