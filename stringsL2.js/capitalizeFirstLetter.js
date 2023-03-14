// Capitalise each word in the given string.
// https://replit.com/@ac102-batch/Capitalization-Raviegupta#index.js

function capitalization(str) {
  let arrWords = str.split(" ");
  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
  }
  return arrWords.join(" ");
}
console.log(capitalization("capitalize every word"));
