// Given a string which contains an email address, return true if the given email is valid, else return false.
// https://replit.com/@ac102-batch/Valid-Email-Raviegupta


const validEmail = (str) => {
    return (str.includes('@') && str.includes('.'));
};
console.log(validEmail('raviegupta153@gmail.com'));
console.log(validEmail('raviegupta153@gmail'));