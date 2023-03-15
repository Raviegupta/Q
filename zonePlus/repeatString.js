// You are given a string and a number, return a string in which the given string is repeated n number of times.
// https://replit.com/@ac102-batch/Repeat-Raviegupta#index.js


const repeatStr = (str, num) => {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
};
console.log(repeatStr("Ravie", 3));
