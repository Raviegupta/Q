// Return a string containing the sum of odd digits and even digits spearted by comma. Return -1 in case there are no odd or even digits. If there are only odd digits return their sum as a string. If there are only even digits return their sum as a string. Note: 0 is neither even nor odd.
// https://replit.com/@ac102-batch/Even-Odd-Raviegupta

const evenDigits = (n) => {
  n = String(n);
  let evenSum = 0,
    oddSum = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      evenSum += Number(n[i]);
    } else {
      oddSum += Number(n[i]);
    }
  }
  if (evenSum == 0 && oddSum == 0) {
    return -1;
  } else if (evenSum == 0 && oddSum != 0) {
    return String(oddSum);
  } else if (evenSum != 0 && oddSum == 0) {
    return String(evenSum);
  } else {
    return `${oddSum},${evenSum}`;
  }
};
