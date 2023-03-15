// You are given a number. Return the mean of the digits.
// https://replit.com/@ac102-batch/Mean-Raviegupta#index.js


const mean = (num) => {
  let numStr = String(num);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  return sum / numStr.length;
};
console.log(mean(153));
console.log(mean(94656));
