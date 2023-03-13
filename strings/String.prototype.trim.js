// String.prototype.trim() :-
// removes whitespace from both ends of a string and returns a new string, without modifying the original string.

const greeting = '   Hello world!   ';
console.log(greeting.trim());

let newStr = greeting.trim();
console.log(newStr)




// ---------------------------------------------------------------------------------------------------------
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
// String.prototype.trimStart() :-

const greeting2 = '   Hello world!   ';
console.log(greeting2.trimStart());

let newStr2 = greeting2.trimStart();
console.log(newStr2)