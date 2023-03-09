// return the reverse of the number

const reverse = (num) => {
  let remainder;
  let opposite = 0;
  while (num != 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    opposite = opposite * 10 + remainder;
  }
  return opposite;
};
