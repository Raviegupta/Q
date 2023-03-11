// Array.prototype.fill() :-
// changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
// It returns the modified array.

const array = [1, 2, 3, 4, 5, 6];

array.fill(0, 2, 4);
console.log(array);

array.fill(7, 2);
console.log(array);

array.fill(9);
console.log(array);


// ---------------------------------------------------------------------------------------------------------
// implement Array.prototype.fill()
const fill = (arr, value, start, end) => {
    for(let i = start; i < end; i++) {
        arr[i] = value;
    }
    return arr
}
console.log(fill([1, 2, 3, 4, 5, 6], 0, 2, 4))


// ---------------------------------------------------------------------------------------------------------
// https://replit.com/@ac102-batch/Change-to-Zero-1-Raviegupta#index.js