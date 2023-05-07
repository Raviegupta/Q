// Insertion Sort

// For every index we will try to put arr[index] at the corret position.
// for that no, we checked with all the previous adjacent nos, & 
// if it is not present at corrext position => we swap it.
// best case TC :- O(n);
// worst/avg case TC :- O(n2)

function insertionSort(arr) {
   for(let index = 0; index < arr.length; index++) {
    let j = index;
    while(j > 0 && arr[j] < arr[j-1]) {
        // swap
        // [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j--
    }
   } 
   return arr
}
console.log(insertionSort([5, 4, 2, 1, 3]));

// worst case TC (when array is in descending):- 1 + 2 + 3 + ...... n    => O(0.5 * n* (n+1))
// best case TC (when array is already sorted):- we will never go in while loop  =>  O(n)

// insertion sort is better than both selection & bubble sort bcoz Best case TC of insertion sort is O(n) & rest both have O(n2) in all cases
