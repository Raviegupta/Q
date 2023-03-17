// Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.


const digitsSum = (num) => {
    let sum = 0;
    while(num>0) {
        let rem = num%10;
        sum += rem;
        num = Math.floor(num/10);
    }
    return sum;
}


const mars = (num) => {
    count = 0;
    while(num>9) {
        num = digitsSum(num);
        count++
        console.log(num, count);
    }
    return (count%2 == 0) ? "Mars ✅" : "Mars ❎"
    
}
console.log(mars(199));
console.log(mars(195));