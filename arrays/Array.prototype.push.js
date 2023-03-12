// Array.prototype.push() :-
// adds one or more elements to the end of an array.
// returns the new length of the array.

const fruits = ["apple", "banana", "mango", "orange"];
const fruitsNewLength = fruits.push("kiwi", "grapes");
console.log(fruits);
console.log(fruitsNewLength);

// implement
const push = (arr, number) => {
  arr[arr.length] = number;
  return arr;
};
console.log(push([1, 2, 3], 4));

