// Fibonacci Series :- The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers. The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
// https://replit.com/@ac102-batch/Number-of-Student-Raviegupta

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.
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


// solving using recursion
function fibo(n) {
  if(n<2) return n;
  else return fibo(n-2) + fibo(n-1);
}
console.log(fibo(2));
console.log(fibo(8));


// now solving using the memoization
const fib = (n, memo) => {
  memo = memo || {}

  if (memo[n]) return memo[n]

  if (n < 2) return n
  return memo[n] = fib(n-2, memo) + fib(n-1, memo)
}

console.log(fib(2));
console.log(fib(8));