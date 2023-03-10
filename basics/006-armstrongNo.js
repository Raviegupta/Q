// Armstrong No
// ex:- raviegupta153@gmail.com, 1634
// https://replit.com/@ac102-batch/Aircampus-Number-Raviegupta

const armstrongNo = (n) => {
  n = String(n);
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]) ** Number(n.length);
  }
  let result = sum == n ? "armstrong" : "no";
  return result;
};
console.log(armstrongNo(153));
console.log(armstrongNo(1634));
console.log(armstrongNo(121));
