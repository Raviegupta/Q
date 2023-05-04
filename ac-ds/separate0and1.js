// given Binay Array 
// separate 0 & 1

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
