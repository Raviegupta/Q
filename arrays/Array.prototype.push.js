// Array.prototype.push() :-
// adds one or more elements to the end of an array.
// returns the new length of the array.

const fruits = ["apple", "banana", "mango", "orange"];
const fruitsNewLength = fruits.push("kiwi", "grapes");
// console.log(fruits);
// console.log(fruitsNewLength);

// implement
const push = (arr, element) => {
  arr[arr.length] = element;
  return arr;
};
// console.log(push([1, 2, 3], 4));


// ---------------------------------------------------------------------------------------------------------
// -------------------------------------Array.prototype.unshift()-------------------------------------------
// Array.prototype.unshift() :- has similar behavior to push(), but applied to the start of an array.

const vegetables = ['beans', 'spinach', 'tomato', 'carrot'];
const vegNewLength = vegetables.unshift('beetroot', 'capsicum');
// console.log(vegetables);
// console.log(vegNewLength);

// implement
const unshift = (arr, element) => {
    let newArr = [];
    newArr[0] = element;
    for(let i = 0; i < arr.length; i++) {
        newArr[i+1] = arr[i];
    }
    return newArr;
}
console.log(unshift(['beans', 'spinach', 'tomato'], 'potato'));

