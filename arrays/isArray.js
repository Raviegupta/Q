// Check it is array or not ?
// https://replit.com/@ac102-batch/Element-Index-1-Raviegupta

// const isArray = (arr) => {
//   if (typeof arr == "object") {
//     return "YES";
//   } else {
//     return "NO";
//   }
// };

// console.log(isArray([2,4,5]));
// console.log(isArray(7));
// console.log(isArray({a: 5, b: "Hello World"}));

// ----------------------------------------------------------------------------------------------------------
// If it is array return the index of given element if it is present, not present return -1. if it is not array return "Not an Array"

const elementIndex = (arr, element) => {
  if(typeof(arr) == 'object') {
    return arr.indexOf(element)
  } else {
    return "Not an Array"
  }
}

// console.log(elementIndex([2,4,5], 4));
// console.log(elementIndex([2,4,5], 7));
// console.log(elementIndex(7));
// console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'duck'));
// console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'girrafe'));

// ---------------------------------------------------------------------------------------------------------
// Check it is array or object 
// The isArray() method returns true if an object is an array, otherwise false.

const isArray = (arr) => {
  let ans = Array.isArray(arr);
  return ans;
}
console.log(isArray([2,4,5]));
console.log(isArray(7));
console.log(isArray({a: 5, b: "Hello World"}));


