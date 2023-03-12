// Array.prototype.pop() :-
// removes the last element from an array and returns that element.

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
console.log(pop(["broccoli", "cauliflower", "cabbage", "kale", "tomato"]));


// ---------------------------------------------------------------------------------------------------------

