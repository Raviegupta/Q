// find the minimum of the given three nos without using Math functions.
// or implement Math.min()

const minimum = (a, b, c) => {
    if(a<b && a<c) return a;
    else if (b<a && b<c) return b;
    else return c;
}
console.log(minimum(5,7,3));
console.log(minimum(4,2,9));


const minimum2 = (a, b, c) => {
    let min = Math.min(a, b, c);
    return min;
}
console.log(minimum(5, 7, 3));



// ---------------------------------------------------------------------------------------------------------