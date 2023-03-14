// Given a string, return the string in reverse
// https://replit.com/@ac102-batch/String-Reverse-Raviegupta

const reverse = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
console.log(reverse("javascript is beautiful"));

const reverse2 = (str) => {
  let arrChars = str.split("");
  arrChars.reverse();
  return arrChars.join("");
};
console.log(reverse2("javascript is awsome"));



// ---------------------------------------------------------------------------------------------------------
// reverse the string word by word
// https://replit.com/@ac102-batch/String-Reverse-I-Raviegupta

const reverseByWords = (str) => {
  let arrWords = str.split(' ').reverse().join(' ')
  return arrWords
}
console.log(reverseByWords('the sky is blue'));