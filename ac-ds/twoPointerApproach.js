// given Binay Array 
// separate 0 & 1

// approach 1
const separate0and1 = (arr) => {
    let countOf0 = 0, countOf1 = 0;

    // first counting no of 0 and 1
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) countOf0++;
        else countOf1++
    }

    // filling 0 and 1
    for(let i=0; i<countOf0; i++) arr[i] = 0;
    for(let i=countOf0; i<countOf0 + countOf1; i++) arr[i] = 1;
    
    return arr;
}
console.log(separate0and1([1, 0, 1, 1, 0, 0]));

// TC :- O(n)


// ==================================================
const separate0and1ByTwoPointer = (arr) => {
    let left = 0; right = arr.length - 1;
    
    while(left < right) {

        while(left < right && arr[left] == 0) left++;
        while(left < right && arr[right] == 1) right--;
        if(left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        } 
    }
        
    return arr;
}
console.log(separate0and1ByTwoPointer([1, 0, 1, 1, 0, 0]));

// TC :- O(n)


// ==================================================
// ==================================================
// Q:- given an integer array, separate its even and odds mumbers.

const separateEvenOdd = arr => {
    let left = 0, right = arr.length-1;

    while(left < right) {
        while(left < right && arr[left]%2 == 0) left++;
        while(left < right && arr[right]%2 != 0) right--;
        if(left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
    return arr;
}
console.log(separateEvenOdd([7, 8, 4, 23, 9, 2]));
















