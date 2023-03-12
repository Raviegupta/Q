// Array.prototype.slice() :-
// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// https://replit.com/@ac102-batch/SubArray-1-Raviegupta#index.js

// Syntax :-
// slice()
// slice(start)
// slice(start, end)

const animals = ["ant", "bison", "camel", "duck", "elephant", "lion"];
let ans = animals.slice();
// console.log(ans);

// console.log(animals.slice(2));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, 5));
// console.log(animals.slice(2, -1));

// implement
const slice = (arr, start, end) => {
  let newArray = [],
    j = 0;
  for (let i = start; i < end; i++) {
    newArray[j] = arr[i];
    j++;
  }
  return newArray;
};
console.log(slice(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3));