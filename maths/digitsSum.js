// find the sum of its digits;

const sum = (num) => {
    let sum = 0, rem;
    while(num > 0) {
        rem = num%10;
        sum += rem;
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sum(9876));