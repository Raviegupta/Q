// convert the given array to string.
// https://replit.com/@ac102-batch/Array-to-String-2-Raviegupta

// method1 :- Object.prototype.toString() :-
// returns a string representing the object, By default toString() takes no parameters.
// also convert the nested array into string using toString().
const arrString = (arr) => {
    let ans =  arr.toString();
    return ans;
}
// console.log(arrString([1, 5, 3, "ravie"]));
// console.log(arrString([1, 5, 3, "ravie", ["Hello", "Hi"]]));

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
// ---------------------------------------String.prototype.split()------------------------------------------

// convert the string back to the array, we will use the split() method.
// String.prototype.split() :-
// The split() method takes a pattern for dividing the string by searching the pattern.
// divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
// strings are unmutable, so 🤣 enjoy.

const str = 'The quick brown fox, jumps over the lazy dog.';
let words = str.split(' ');     
console.log(words);
console.log(words[3]);
console.log(str);

let chars = str.split('')
console.log(chars);
console.log(chars[5]);

let strCopy = str.split();
console.log(strCopy);