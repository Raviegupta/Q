// strong no

const fact = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++) {
        fact *= i;
    }
    return fact;
}
// console.log(fact(0))


const isStrong = (num) => {
    let sum = 0, originalNo = num;
    while(num>0) {
        rem = num%10;
        sum += fact(rem);
        num = Math.floor(num/10);
    }
    // console.log(sum, originalNo)
    return (sum == originalNo) ? "Strong No" : "Not Strong"
}
console.log(isStrong(145));
console.log(isStrong(40585));
console.log(isStrong(94656));