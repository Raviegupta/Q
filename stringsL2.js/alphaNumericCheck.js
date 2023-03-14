// alphanumeric :- 
// ravie :- No
// raviegupta153 :- Yes


// console.log('a'%1 == 0);
// console.log('@'%1 == 0);
// console.log('0'%1 == 0);
// console.log('3'%1 == 0);

// ******************************************
// console.log(( (" "% 1) == 0))  
// ******************************************


const isAlphaNumeric = (str) => {
    let check = false;
    for(let i=0; i<str.length; i++) {
        if(str[i]%1 == 0 && str[i] != " ") {
            check = true;
        }
    }
    return check == true;
}
console.log(isAlphaNumeric('alphanumeric'));
console.log(isAlphaNumeric('raviegupta153@gmail.com'));
console.log(isAlphaNumeric('Hello World'));

// ---------------------------------------------------------------------------------------------------------