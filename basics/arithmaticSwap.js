// Arithmatic Swap
// Q. Swap two variables with the help of Arithmatic operation only without creating any variable.

const swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return a;
};

console.log(swap(5, 7));

