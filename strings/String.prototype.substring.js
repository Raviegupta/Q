// String.prototype.substring() :-
// returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.


const str = "Chandigarh";
console.log(str.substring(1));
console.log(str.substring(1, 5));


// implement
const substring = (str, start, end) => {
    let newStr = '';
    for(let i = start; i<end; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log(substring('Chrome', 2, 5));