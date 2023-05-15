const addition =(x, y, z)=>{
    return x+y+z
}
console.log(addition(2, 3, 5)) // 10


// by using currying
function sum(x) {   // x is taken as argument here
    return (y) => {
        return (z) => { // this function will return the sum
            return x + y + z
        }
    }
}
console.log(sum(1)(2)(3)) // 6
