// given a two digit, reverse that number

const twoDigitReverse = (num) => {
    let a = Math.floor(num/10);
    let b = num%10;
    let newNum = b*10 + a;
    return newNum;
}
console.log(twoDigitReverse(27));