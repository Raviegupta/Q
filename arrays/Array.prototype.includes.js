// Array.prototype.includes() :-
// returns boolean
// Syntax :- 
//           includes(searchElement)
//           includes(searchElement, fromIndex)

const array = [1, 5, 2, 9, 17];
// console.log(array.includes(5));
// console.log(array.includes(7));

const orders = ["paneer pizza", "cake", "cold drink", "chips"];
let ans = orders.includes("sahee paneer");
// console.log(ans);
// console.log(orders.includes("paneer pizza", 1));
// console.log(orders.includes("paneer pizza", -2));  // index counting right to left but still search left to right


// ---------------------------------------------------------------------------------------------------------
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false

console.log([1, 2, NaN].includes(NaN));