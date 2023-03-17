// hcf

const hcf = (a, b) => {
  let hcf;
  for (let i = 0; i <= a || i <= b; i++) {
    a % i == 0 && b % i == 0 ? (hcf = i) : "hcf";
  }
  return hcf;
};
console.log(hcf(4, 8));
console.log(hcf(2, 7));
console.log(hcf(32, 64));


// ---------------------------------------------------------------------------------------------------------