// convert the given array to string.
// https://replit.com/@ac102-batch/Array-to-String-2-Raviegupta

// method1 :- Object.prototype.toString() :-
// returns a string representing the object, By default toString() takes no parameters.
// also convert the nested array into string using toString().
const arrString = (arr) => {
    let ans =  arr.toString();
    return ans;
}
console.log(arrString([1, 5, 3, "ravie"]));
console.log(arrString([1, 5, 3, "ravie", ["Hello", "Hi"]]));

// ---------------------------------------------------------------------------------------------------------
// method2 :- String()
const arrString2 = (arr) => {
    return String(arr);
}
// console.log(arrString2([1, 5, 3, "ravie"]));

// ---------------------------------------------------------------------------------------------------------
// implementation
const arrToString = (arr) => {
    let str = "";
    for(let i = 0; i < arr.length-1; i++) {
       str += arr[i] + ','
    }
    str += arr[arr.length-1]
    return str;
}
// console.log(arrToString([1, 5, 3, "ravie"]));



// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------