// hcf

const hcf = (a, b) => {
  let hcf;
  for (let i = 0; i <= a || i <= b; i++) {
    a % i == 0 && b % i == 0 ? (hcf = i) : "hcf";
  }
  return hcf;
};
// console.log(hcf(4, 8));
// console.log(hcf(2, 7));
// console.log(hcf(32, 64));

// ---------------------------------------------------------------------------------------------------------
// lcm

const lcm = (a, b) => {
  let l = 0,
    s = Math.min(a, b),
    lcm,
    check = false;
  for (let i = 1; i >= 1; i++) {
    l += Math.max(a, b);
    if (l % s == 0) {
      lcm = l;
      check = true;
    }
    if (check == true) break;
  }
  return lcm;
};
console.log(lcm(5, 16));
console.log(lcm(21, 5));
console.log(lcm(2, 47));
console.log(lcm(5, 25));
