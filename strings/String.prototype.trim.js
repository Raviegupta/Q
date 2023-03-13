// String.prototype.trim() :-
// removes whitespace from both ends of a string and returns a new string, without modifying the original string.

const greeting = '   Hello world!   ';
console.log(greeting.trim());

let newStr = greeting.trim();
console.log(newStr);




// ---------------------------------------------------------------------------------------------------------
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
// String.prototype.trimStart() :-

const greeting2 = '   Hello world!   ';
console.log(greeting2.trimStart());

let newStr2 = greeting2.trimStart();
console.log(newStr2);



// ---------------------------------------------------------------------------------------------------------
// String.prototype.trimEnd() :-

const greeting3 = '   Hello world!   ';
console.log(greeting3.trimEnd());

let newStr3 = greeting3.trimEnd();
console.log(newStr3)


// ---------------------------------------------------------------------------------------------------------
// Return the string after removing all the whitespace
// https://replit.com/@ac102-batch/Remove-Whitespace-Raviegupta#index.js

const removeSpace = (str) => {
    let arr = str.split(' ');
    let newStr = arr.join('');
    return newStr;
}
console.log(removeSpace('   beer campus   '));