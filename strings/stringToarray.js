// Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array
// https://replit.com/@ac102-batch/Character-Array-Raviegupta#index.js

// const charArray = (str) => {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       arr.push(str[i]);
//     }
//   }
//   return arr;
// };
// console.log(charArray("java script"));


// const charArray2 = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       newStr += str[i];
//     }
//   }
//   return newStr.split("");
// };
// console.log(charArray2("java script"));


// using Methods
const charArray3 = (arr) => {
  let arrWords = arr.split(" ");
  let newStr = arrWords.join("");
  arrChars = newStr.split("");
  return arrChars;
};
console.log(charArray3("java script"));
