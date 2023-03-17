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



// ---------------------------------------------------------------------------------------------------------
// display the even digits
const evenDigits = (num) => {
    let check = false, rem;
    while(num > 0) {
        rem = num%10;
        if(rem%2==0) {
            console.log(rem);
            check = true;
        }
        num = Math.floor(num/10);
    }
    return check==false ? 'No even digits' : '✅';
}
console.log(evenDigits(9876));
console.log(evenDigits(357));