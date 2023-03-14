// return the middle character, if the string length is odd, else return the middle two characters.
// https://replit.com/@ac102-batch/Middle-Character-Raviegupta#index.js

const middleChar = (str) => {
  newStr = "";
  if (str.length % 2 == 0) {
    newStr += str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    newStr += str[Math.floor(str.length / 2)];
  }
  return newStr;
}
console.log(middleChar("test"));
console.log(middleChar("ravie"));
