// You are given two numbers, return the sum of all the alternate numbers between the two number. Both the numbers are inclusive.
// https://replit.com/@ac102-batch/Alternate-Sum-Raviegupta#README.md


const even = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(even(1, 5));
console.log(even(10, 20));
