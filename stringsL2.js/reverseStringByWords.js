// reverse the string word by word
// https://replit.com/@ac102-batch/String-Reverse-I-Raviegupta

const reverseByWords = (str) => {
    let arrWords = str.split(' ').reverse().join(' ')
    return arrWords
  }
  console.log(reverseByWords('the sky is blue'));
  
  
  const reverseByWords2 = (str) => {
    let arrWords = str.split(' ');
    let newStr = '';
    for(let i=(arrWords.length)-1; i>=1; i--) {
      newStr += arrWords[i] + ' ';
    }
    newStr += arrWords[0];
    return newStr;
  }
  console.log(reverseByWords2('the sky is blue'));
  
  
  const reverseByWords3 = (str) => {
    let arrWords = str.split(' ');
    let newStr = '';
    for(let i=(arrWords.length)-1; i>=0; i--) {
      i>0 ? newStr += arrWords[i] + ' ' : newStr += arrWords[0]
    }
    return newStr;
  }
  console.log(reverseByWords3('the sky is blue'));