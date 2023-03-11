// Array.prototype.sort() :-
// sorts the elements of an array (in dictionary pattern) & returns the reference to the same array, now sorted.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// console.log(months);

const arr1 = [1, 3, 50, 7, 200];
arr1.sort();
// console.log(arr1);

// ---------------------------------------------------------------------------------------------------------
// Array.prototype.reverse() :-
// reverses an array
// returns the reference to the same array, now reversed. So mutating the returned array will mutate the original array as well.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits[0] = "berry"; 
// console.log(fruits);

// ---------------------------------------------------------------------------------------------------------
// without comparing function
const mixedNumericArray = ["80", "9", "300", 40, 1, 5, 200];
mixedNumericArray.sort();
// console.log(mixedNumericArray);

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// with comparing function
const compareNumbers = (a,b) => {
    return a-b;
}

const mixedNumericArray1 = ["80", "9", "300", 40, 1, 5, 200];
mixedNumericArray1.sort(compareNumbers);
// console.log(mixedNumericArray1);

mixedNumericArray2 = ["80", "9", "300", 40, 1, 5, 200];
mixedNumericArray2.sort((a, b) => a-b);
console.log(mixedNumericArray2);

// ---------------------------------------------------------------------------------------------------------
