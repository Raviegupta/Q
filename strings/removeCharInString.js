// remove all the occurence of the given character and return the string.
// https://replit.com/@ac102-batch/Remove-Character-Raviegupta#index.js

const removeChar = (str, char) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != char.toLowerCase() && str[i] != char.toUpperCase()) {
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(removeChar("ChandigArh", "a"));



