export const addCommas = (x: number | string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toFloatingPrecision = (floatNumber: number, precision: number) => {
  const integerPart: number = Math.floor(floatNumber);
  const floatingPart: number = floatNumber - integerPart;

  return integerPart + parseFloat(floatingPart.toPrecision(precision));
};

export const makeShortenedText = (text: string, limit: number, tail = "..."): string => (
  text.length >= limit
    ? `${text.substring(0, limit - tail.length)}${tail}`
    : text
);

export const addLeadingZero = (number: number, digitsCount = 2) => {

  let leadingZero = "";
  for (let index = 0; index < digitsCount - number.toString().length; index++) {

    leadingZero = `0${leadingZero}`;

  }
  return leadingZero + number;

};