// Anagram :- a word or phrase formed by rearranging the letters of a different word or phrase.
// anagram => nag a ram
// binary => brainy
// earth  => heart 


const anagram = (str1, str2) => {
   let newStr1 = str1.split('').sort().join('').trim().toLowerCase();
   let newStr2 = str2.split('').sort().join('').trim().toLowerCase();
//    console.log(newStr1, newStr2);
//    console.log(str1, str2);
   return newStr1 == newStr2;
}
console.log(anagram('Anagram', 'nag a ram'));



// ---------------------------------------------------------------------------------------------------------