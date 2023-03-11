// Check it is array or not ?
// https://replit.com/@ac102-batch/Element-Index-1-Raviegupta

const isArray = (arr) => {
  if (typeof arr == "object") {
    return "YES";
  } else {
    return "NO";
  }
};

// console.log(isArray([2,4,5]));
// console.log(isArray(7));

// -------------------------------------------------------
// If it is array return the index of given element if it is present, not present return -1. if it is not array return "Not an Array"

const elementIndex = (arr, element) => {
  if(typeof(arr) == 'object') {
    return arr.indexOf(element)
  } else {
    return "Not an Array"
  }
}

console.log(elementIndex([2,4,5], 4));
console.log(elementIndex([2,4,5], 7));
console.log(elementIndex(7));
console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'duck'));
console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'girrafe'));