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
// If it is array return the index of given element if it is present, not present return -1. if it is not array return "Not Array"

const elementIndex = (arr, element) => {
  if(typeof(arr) == 'object') {
    return arr.indexOf(element)
  } else {
    return "Not Array"
  }
}

// console.log(elementIndex([2,4,5], 4));
// console.log(elementIndex([2,4,5], 7));
// console.log(elementIndex(7));
// console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'duck'));
// console.log(elementIndex(['ant', 'bison', 'camel', 'duck', 'bison'], 'girrafe'));



// ---------------------------------------------------------------------------------------------------------
// If element exist in the array return the index of the element else return "Not Found". If there are multiple occurence of the element return the last occurence of the element
// https://replit.com/@ac102-batch/Index-Of-1-Raviegupta

const indexOf = (arr, element) => {
  if(typeof(arr) == 'object') {
    let ans =  arr.lastIndexOf(element);
    return ans == -1 ? "Not Found" : ans
  } else {
    return "Not Found"
  }
}

// Implementation of lastIndexOf()
function indexOf(arr, element) {
  if ((typeof (arr) == 'object')) {
    for (var i = arr.length; i >= 0; i--) {
      if (arr[i] == element) {
        return i
      }
    } if (i == -1) {
      return 'Not Found'
    }
  } else return 'Not Array'
}

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



// ---------------------------------------------------------------------------------------------------------

