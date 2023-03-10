// Binary to Decimal Conversion
// given 4 binary bits as arguments, convert the given bits to decimal equivalent

const decimal = (a, b, c, d) => {
  let result = a * 8 + b * 4 + c * 2 + d * 1;
  return result;
};
console.log(decimal(1, 0, 1, 1));
