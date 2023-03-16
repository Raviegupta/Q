// Take an integer and return the factorial.


const factorial = (num) => {
    let fact = 1;
    for(let i=1; i<num; i++) {
        fact += fact*i
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(7));


const factorial2 = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++) {
        fact *= i
    }
    return fact;
}
console.log(factorial2(5));
console.log(factorial2(7));