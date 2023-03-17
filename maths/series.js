// Take an integer N and print the sum of series given below upto N numbers(terms).
//  S =  2+4+6+8 ….. N    


const series = (N) => {
    let sum = 0;
    for(let i=1; i<=N; i++) {
        sum += i*2
    }
    return sum;
}
console.log(series(6));



// ---------------------------------------------------------------------------------------------------------
// S = 1!+2!+3!+4!....N!  (upto N terms)

const fact = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++) {
        fact *= i; 
    }
    return fact;
}

const series2 = (N) => {
    let sum = 0;
    for(let i=1; i<=N; i++) {
        sum += fact(i);
    }
    return sum;   
}
console.log(series2(4))
console.log(series2(5))



// ---------------------------------------------------------------------------------------------------------
// S = ½ + ⅔ + ¾ = 23/12 = 1.917

const series3 = (N) => {
    let sum = 0;
    for(let i=1; i<=N; i++) {
        let num = i;
        let den = i+1;
        let term = (num/den);
        sum += term;
    }
    return sum;
}
console.log(series3(3));
console.log(series3(4));



// ---------------------------------------------------------------------------------------------------------