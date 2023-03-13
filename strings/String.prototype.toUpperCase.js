// String.prototype.toUpperCase() :-
// returns a new string representing the calling string converted to upper case.
// This method does not affect the value of the string itself since JavaScript strings are immutable.

const sentence = 'The quick brown fox jumps over the lazy dog.';
let newStr = sentence.toUpperCase();
console.log(sentence);
console.log(newStr);


// ---------------------------------------------------------------------------------------------------------
// String.prototype.toLowerCase() :-

console.log("Ravie Gupta".toLowerCase());




// ---------------------------------------------------------------------------------------------------------
// conversion to lower to upper & upper to lower in given string
// https://replit.com/@ac102-batch/Upper-less-greater-Lower-Raviegupta#index.js

const upperLower = (str) => {
    let newStr = "";
    for(let i = 0; i<str.length; i++) {
       if(str[i] == 'a' || str[i] == 'b' || str[i] == 'c' || str[i] == 'd' || str[i] == 'e' || str[i] == 'f' || str[i] == 'g' || str[i] == 'h' || str[i] == 'i' || str[i] == 'j' || str[i] == 'k' || str[i] == 'l' || str[i] == 'm' || str[i] == 'n' || str[i] == 'o' || str[i] == 'p' || str[i] == 'q' || str[i] == 'r' || str[i] == 's' || str[i] == 't' || str[i] == 'u' || str[i] == 'v' || str[i] == 'w' || str[i] == 'x' || str[i] == 'y' || str[i] == 'z') {
        newStr += str[i].toUpperCase();
       } else {
        newStr += str[i].toLowerCase();
       }
    }
    return newStr;
}
// console.log(upperLower('Hello World'));


const upperLower2 = (str) => {
    let newStr = "";
    for(let i = 0; i<str.length; i++) {
        if(str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }  
    return newStr;
}
console.log(upperLower2("Ravie Gupta"));