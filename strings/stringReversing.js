// Given a string, return the string in reverse
// https://replit.com/@ac102-batch/String-Reverse-Raviegupta

const reverse = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
// console.log(reverse("javascript is beautiful"));

const reverse2 = (str) => {
  let arrChars = str.split("");
  arrChars.reverse();
  return arrChars.join("");
};
// console.log(reverse2("javascript is awsome"));



// ---------------------------------------------------------------------------------------------------------
// reverse the string word by word
// https://replit.com/@ac102-batch/String-Reverse-I-Raviegupta

const reverseByWords = (str) => {
  let arrWords = str.split(' ').reverse().join(' ')
  return arrWords
}
// console.log(reverseByWords('the sky is blue'));


const reverseByWords2 = (str) => {
  let arrWords = str.split(' ');
  let newStr = '';
  for(let i=(arrWords.length)-1; i>=1; i--) {
    newStr += arrWords[i] + ' ';
  }
  newStr += arrWords[0];
  return newStr;
}
// console.log(reverseByWords2('the sky is blue'));


const reverseByWords3 = (str) => {
  let arrWords = str.split(' ');
  let newStr = '';
  for(let i=(arrWords.length)-1; i>=0; i--) {
    i>0 ? newStr += arrWords[i] + ' ' : newStr += arrWords[0]
  }
  return newStr;
}
// console.log(reverseByWords3('the sky is blue'));



// ---------------------------------------------------------------------------------------------------------
// string manipulation1
// reverse the chars of each word in it's position only. (***)
// Ravie Gupta  =>  eiveR atpuG

const reverse3 = (str) => {
  let arrWords = str.split(' ');
  let newStr = '';
  for(let i=0; i<arrWords.length; i++) {
    for(let j= arrWords[i].length-1; j>=0;j--) {
      newStr += arrWords[i][j];
    }
    newStr += " "; 
  }  
  // console.log(newStr);
}
// console.log(reverse3("Ravie Gupta"));
// console.log(reverse3("Chandigarh The City Beautiful"));



// ---------------------------------------------------------------------------------------------------------
// string manipulation2
// city chandigarh  =>  ccihtayndigarh

const reverse4 = (str) => {
  let arrWords = str.split(' ');
  console.log(arrWords);
  let newStr = '', j =0;
  for(let i=0; i<arrWords.length; i++) {
    while(arrWords[i][j] == undefined) {

    }
  }

}
console.log(reverse4('The city chandigarh'))


const reverse5 = (str) => {
  let arrWords = str.split(' ');
  console.log(arrWords);
  let newStr = '', j =0;
  for(k=0; k<=4; k++) {
    for(let i=0; i<arrWords.length; i++) {
    newStr += arrWords[i][j];
    }
    newStr += ' '
    j++;
  }
    console.log(newStr);
  }
  
console.log(reverse5('ravie gupta'));
