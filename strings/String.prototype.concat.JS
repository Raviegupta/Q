// String.prototype.concat() :- 
// concatenates the string arguments to the calling string and returns a new string.

const str1 = "Green";
const str2 = "City";
console.log(str1.concat(str2))
console.log(str1.concat(str2, "Chandigarh"))
console.log(str1.concat(str2, "Chandigarh", "Beutiful"))

console.log(str1.concat(' ', str2))
console.log(str1.concat(' ', str2, ', ', "Chandigarh Beutiful"))