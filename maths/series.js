// Take an integer N and print the sum of series given below upto N numbers(terms).
//  S =  2+4+6+8 ….. N    


const series = (N) => {
    let sum =0;
    for(let i=1; i<=N; i++) {
        sum += i*2
    }
    return sum;
}
console.log(series(6));