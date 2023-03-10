// Number of vowels present in the string

const vowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U" ||
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
};
// console.log(vowels("beErcAmpuS"));

// ---------------------------------------------------------------------------------------------------------

const isVowel = (ch) => {
  ch = ch.toUpperCase();
  return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
};

const vowelsCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(isVowel(str[i]));
  }
  return count;
};
console.log(vowelsCount("beErcAmpuS"));
// TC :- O(n)
// Auxiliary Space :- O(1)
