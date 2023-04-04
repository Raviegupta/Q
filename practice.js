// 04/04/23
// capitalise first letter
// const capitalizeFirstLetter = (str) => {
//     let newStr = ''
//     let arrWords = str.split(' ');
//     for(let i = 0; i<arrWords.length; i++) {
//         newStr += arrWords[i][0].toUpperCase() + arrWords[i].slice(1) + ' '; 
//     }
//     return newStr;
// }
// console.log(capitalizeFirstLetter('i love my india'));


const capitalizeFirstLetter = (str) => {
    let arrWords = str.split(' ');
    for(let i = 0; i<arrWords.length; i++) {
        arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1); 
    }
    return arrWords.join(' ');
}
console.log(capitalizeFirstLetter('i love my india'));


// ------------------------------------------------------
// check palindrome
// const palindrome = (str) => {
//     let newStr = String(str);
//     let check = true;
//     for(let i=0; i<newStr.length/2; i++) {
//         if(newStr[i] != newStr[newStr.length - i -1]) {
//             check = false;
//         }
//     }
//     return check;
// }
// console.log(palindrome(12121));
// console.log(palindrome('arora'));


const palindrome = (str) => {
    let newStr = String(str);
    let count = 0;
    let j = newStr.length - 1
    for(let i =0; i<newStr.length/2; i++) {
        if(str[i] == str[j] && i < newStr.length/2 && j>=newStr.length/2) {
            count++;    
        }
        j--   
    }
    console.log(count)
    return count == Math.floor(newStr.length/2);
}
console.log(palindrome('121221'));
console.log(palindrome('arora'));

// ------------------------------------

// Array.prototype.slice();

let arr = ['apple', 'banana', 'mango', 'cherry', 'oranges'];
let newArr = arr.slice(1);
console.log(newArr, arr);

console.log(arr.slice(2,4));
console.log(arr.slice());

