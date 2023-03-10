// You're given a 5 digit number, return the sum of second and last digit of the number.

const secondLast = (num) => {
  let x = ((num % 10000) - (num % 1000)) / 1000;
  let y = num % 10;
  return x + y;
};
console.log(secondLast(12345));
