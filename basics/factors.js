// Find factors of given no & returns the factors as space seperated string.
// https://replit.com/@ac102-batch/Factor-Of-Raviegupta

function factor(num) {
  let str = "";
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      str += i + " ";
    }
  }
  str += num;
  return num == 0 ? "" : str;
}
console.log(factor(9));



// ---------------------------------------------------------------------------------------------------------
// write a program to find the sum of all the factors of the number.

const factorsSum = (num) => {
  let sum = 0;
  for(let i=1; i<=num; i++){
    if(num%i == 0) {
      console.log(i);
      // sum += i;
    }
  }
  return sum;
}
console.log(factorsSum(9));
console.log(factorsSum(10));
