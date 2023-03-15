// Find factors of given no & returns the factors as space seperated string.
// https://replit.com/@ac102-batch/Factor-Of-Raviegupta

function factor(num) {
  let str = "";
  for (let i = 1; i < num.length; i++) {
    if (num % i == 0) {
      str += i + " ";
    }
  }
  str += num;
  return num == 0 ? "" : str;
}
console.log(factor(9));

