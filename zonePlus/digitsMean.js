// You are given a number. Return the mean of the digits.
// https://replit.com/@ac102-batch/Mean-Raviegupta#index.js


const mean = (num) => {
  let numStr = String(num);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  return sum / numStr.length;
};
console.log(mean(153));
console.log(mean(94656));




// ---------------------------------------------------------------------------------------------------------
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// Numbers should be even
// Second last digit of number is 4
// https://onecompiler.com/challenges/3y6f7223x/loops-1       // Q.10

const product = (a, b) => {
  let prod = 1;
  for(let i=a; i<=b; i++) {
    let x = (i%100 - i%10)/10;
    if(i%2 == 0 && x == 4) {
      prod *= i;
    }
  }
  return prod;
}
console.log(product(40, 50));



// ---------------------------------------------------------------------------------------------------------