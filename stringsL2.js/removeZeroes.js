// Given a string remove leading and trailing zeros from it and return the string.


function removeZeroes(str) {
    let no = Number(str);
    return no.toString();
    // return String(no);
  }
  console.log(removeZeroes('00230.00'))
  console.log(removeZeroes('00500'))