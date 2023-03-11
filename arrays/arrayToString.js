// convert the given array to string.
// https://replit.com/@ac102-batch/Array-to-String-2-Raviegupta

// method1 :- Object.prototype.toString() :- returns a string representing the object, By default toString() takes no parameters
const arrString = (arr) => {
    let ans =  arr.toString();
    return ans;
}
console.log(arrString([1, 5, 3, "ravie"]))