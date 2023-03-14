// palindrome :-
// aroma , 12121


const palindrome = (str) => {
  let j = str.length - 1,
    count = 0;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] == str[j] && i < str.length / 2 && j > str.length / 2) {
      count++;
      j--;
    }
  }
  return count == Math.floor(str.length / 2);
};
console.log(palindrome("arora"));
console.log(palindrome("12121"));
