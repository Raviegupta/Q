// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.
// You are given two numbers n and m. From 0 to n and 0 to m calculate the sum of even and odd numbers respectively and return "Even" or "Odd"
// https://replit.com/@ac102-batch/WAR-Raviegupta


const war = (n, m) => {
  let evenCount = (oddCount = 0);
  for (let i = 1; i <= n; i++) {
    i % 2 == 0 ? (evenCount += i) : "keep fighting";
  }
  for (let i = 1; i <= m; i++) {
    i % 2 != 0 ? (oddCount += i) : "continue";
  }
  return evenCount > oddCount ? "Even" : "Odd";
};
console.log(war(4,5));
console.log(war(8,7));
