// remove all the occurence of the given character and return the string.
// https://replit.com/@ac102-batch/Remove-Character-Raviegupta#index.js

const removeChar = (str, char) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != char.toLowerCase() && str[i] != char.toUpperCase()) {
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(removeChar("ChandigArhaaaAaAa", "a"));


// ---------------------------------------------------------------------------------------------------------
// using String.prototype.replaceAll() :-
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp,
// replacement can be a string or a function to be called for each match

// syntax:- replaceAll(pattern, replacement)


let str = "ChandigArhaaaAaAa" 
let str1 = (str.replaceAll('a', ''));
let str2 = (str1.replaceAll('A', ''));
console.log(str2);


removeChar2 = (str, char) => {
  let str1 = str.replaceAll(char.toUpperCase(), '');
  let str2 = str1.replaceAll(char.toLowerCase(), ''); 
  return str2;
};
console.log(removeChar2("ChandigArhaaaAaAa", "a"));
console.log(removeChar2("PiPnk panPtherp", "P"));

