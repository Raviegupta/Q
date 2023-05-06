// ## 1.Bubble Sort

// Bubble Sort
// [ 4, 5, 7, 1, 2 ]
//=> round1 [4,5,7,1,2] => [4,5,7,1,2]=> [4,5,1,7,2]=>[4,,5,1,2,seven]
//=> round2 [4,5,1,2,seven] => [4,1,5,2,seven] => [4,1,2,five,seven]
//=> round3 [1,4,2,five,seven] => [1,2,four,five,seven]
//=> round4 [1,two,four,five,seven]

// time complexity = 0.5(n-1)n


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1])
        // now swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
// console.log(bubbleSort([4, 5, 7, 1, 2]));
// let array1 = [4, 5, 7, 1, 2 ]
// console.log(bubbleSort(array1))
// console.log(array1)              // now, array1 is also sorted why??? So it's not pure



// ### to make pure function
function buubleSort(array2) {      // to make function Pure
    let arr = [...array2]            // make deep copy by spread operator 
    //let arr = array2.slice()       // deep copy 
      for ( var i = 0 ; i < arr.length; i++ ) {
          for( var j = 0; j < arr.length-1-i; j++) {
              if( arr[j] > arr[j+1]) {
                  var temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
              }
          }
      }
      return arr;
  }
  let array1 = [4, 5, 7, 1, 2 ]
  console.log(buubleSort(array1))
  console.log(array1)              // now it's pure