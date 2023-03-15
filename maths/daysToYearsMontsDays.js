// Take a number and convert it to year, months and days. 
// https://replit.com/@ac102-batch/Number-to-Years-Months-and-Days-1-Raviegupta#index.js

const yearMonthDaysSum = (noOfDays) => {
  let years = noOfDays / 365 - (noOfDays % 365) / 365;
  let months = (noOfDays % 365) / 30 - ((noOfDays % 365) % 30) / 30;
  let days = (noOfDays % 365) % 30;
  return (`Years:${years} Months:${months} Days:${days}`);
};
console.log(yearMonthDaysSum(2000));
console.log(yearMonthDaysSum(4000));
