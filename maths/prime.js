// prime no

const isPrime = (num) => {
    check = true;
    for(let i=2; i<num; i++) {
        if(num%i==0){
            check = false;
        }
        if (check === false) 
        break;
    }
    return check ? "Prime" : "Not Prime"
}
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(29));
// console.log(isPrime(5915587277));