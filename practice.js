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



