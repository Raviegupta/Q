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





// ---------------------------------------------------------------------------------------------------------
// Take two integers as input and return all the prime numbers & their count in between them (exclusive range).

const primeBwTwoNos = (a, b) => {
    let count = 0;
    for(let num=a+1; num<b; num++){
        check = true;
        for(let i=2; i<num; i++) {
            if(num%i==0){
                check = false;
            }
            if(check==false)
                break;
        }
        if(check == true) {
            console.log(num);
            count++;
        }              
    }
    return count; 
}
console.log(primeBwTwoNos(7, 23));
console.log(primeBwTwoNos(1, 50));




// ---------------------------------------------------------------------------------------------------------