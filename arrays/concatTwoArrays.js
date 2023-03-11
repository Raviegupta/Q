// given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.

const arrayConcat = (arr1, arr2) => {
  let arr = [],
    j = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = arr1[i];
  }
  for (let i = arr1.length; i < arr1.length + arr2.length; i++) {
    arr[i] = arr2[j];
    j++;
  }
  return arr;
};
console.log(arrayConcat([1, 5], [7, 9, 10]));

// using method
// const arrayConcat = (arr1, arr2) => {
//   let arr = arr1.concat(arr2);
//   return arr;
// };
// console.log(arrayConcat([1, 5], [7, 9, 10]));
