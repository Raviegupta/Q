// Selection Sort

// ## 1.Selection Sort

// Selection Sort

// [4, 5, 7, 1, 2]

// Step 1:- find the smallest element, 1, swap that element
// with the index 0 element. [0,arr.length-1]
// [1, 5, 7, 4, 2]

// Step 2:- find the second smallest element, and swap it with
// index 1 element. [1, arr.length-1]
// [1, 2, 7, 4, 5]

// Step 3:- find the third smallest element, and swap it with
// index 2 element. [2, arr.length-1]
// [1, 2, 4, 7, 5]

// Step 4:- find the fourth smallest element, and swap it with
// index 3 element. [3, arr.length-1]
// [1, 2, 4, 5, 7]

// Step 5:- find the fifth smallest element, and swap it with
// index 4 element. [4, arr.length-1]
// [1, 2, 4, 5, 7]



function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestElementIndex] > arr[j]) {
        smallestElementIndex = j;
      }
    }
    // let temp = arr[i]
    // arr[i] = arr[smallestElementIndex]
    // arr[smallestElementIndex] = temp
    [arr[smallestElementIndex], arr[i]] = [arr[i], arr[smallestElementIndex]];
  }
  return arr;
}
let array = [9, 6, 7, 3, 8, 2];
console.log(selectionSort(array));





// Questions
// 1. dry run on the test case [2, 1, 3, 7, 5, 4, 6]           // done
// 2. how to change this code for descending.                  // done
// 3. what is the time complexity here.                        // 0.5*(n-1)n  // ????? to ask sir
// 4. can we implement the same algorithm in a different way.  // ????? to ask sir 


