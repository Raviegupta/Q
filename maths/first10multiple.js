// return first 10 multiple of given num with 1 increment & with comma separated.
// https://replit.com/@ac102-batch/N-Tables-1-Raviegupta#index.js


const table = (num) => {
  let str = "";
  for (let i = 1; i < 10; i++) {
    str += num * i + 1 + ",";
  }
  str += num * 10 + 1;
  return str;
};
console.log(table(7))


function table2(n) {
  let str = '';
  for (let i = 1; i <= 10; i++) {
    if (i == 10) {
      str += (n * i) + 1;
    } else {
      str += (n * i) + 1 + ',';
    }
  }
  return str;
}
console.log(table2(7));