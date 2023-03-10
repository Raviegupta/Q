// Fibonacci Series :- The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers. The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
// https://replit.com/@ac102-batch/Number-of-Student-Raviegupta

const fibonacci = (a, b, n) => {
  console.log(a);
  console.log(b);
  for (let i = 1; i <= n - 2; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
  return `${n}th term is ${b}`;
};
console.log(fibonacci(0, 1, 10));
console.log(fibonacci(20, 30, 10));
