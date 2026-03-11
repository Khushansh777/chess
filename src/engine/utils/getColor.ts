export const getColor = (peice: string): string => {
  const initial: string = peice[0];
  const color: string = initial === "w" ? "white" : "black";
  return color;
};
