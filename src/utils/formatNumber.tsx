import numeral from "numeral";

export const formatNumberText = (number: string | number) => {
  return `$ ${numeral(number).format("0,0.00")}`;
};
