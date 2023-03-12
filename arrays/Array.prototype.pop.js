// Array.prototype.pop() :-
// removes the last element from an array and returns that element.
// mutating method. It changes the length and the content of array.
// returns undefined if the array is empty.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
let removedElement = plants.pop();
// console.log(removedElement);
// console.log(plants);

// console.log(plants.pop());
// console.log(plants.pop());
// console.log(plants.pop());
// console.log(plants.pop());
// console.log(plants.pop()); // returns undefined when array is empty
// console.log(plants);

// implement
const pop = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};
// console.log(pop(["broccoli", "cauliflower", "cabbage", "kale", "tomato"]));





// ---------------------------------------------------------------------------------------------------------
// -------------------------------------Array.prototype.shift()---------------------------------------------
// Array.prototype.shift() :- has similar behavior to pop(), but applied to the first element in an array.

const myFish = ["angel", "clown", "mandarin", "surgeon"];
const shifted = myFish.shift();
// console.log(shifted);
// console.log(myFish);


// implement
const shift = (arr) => {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  return newArr;
};
console.log(shift(["angel", "clown", "mandarin", "surgeon"]))

